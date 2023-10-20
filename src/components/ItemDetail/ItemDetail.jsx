import './ItemDetail.css'
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2';
import PropTypes from "prop-types"


const ItemDetail = ({ prop }) => {

    const { name, price, stock, pic1, description, id } = prop;

    const { addProductToCart } = useContext(CartContext)


    const [article, setArticle] = useState(pic1)
    const [quantity, setQuantity] = useState(1)
    const [isProductAdded, setIsProductAdded] = useState(false);
    // const [showButton, setShowButton] = useState(false)

    const onAdd = () => {
        if (quantity !== null) {
            setIsProductAdded(true);
            addProductToCart({ name, price, pic1, quantity, id, stock })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Tienes que seleccionar una cantidad',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    }

    // Función para seleccionar la imagen principal en el grid
    const selectArticle = (img) => {
        setArticle(img)
    }

    return (
        <>
            <h1>Características del artículo</h1>
        <div className="container">

            <img className="primary-pic" alt={`Articulo ${name}`} src={pic1} />
            <div className='title'>
                <h3>{name}</h3>
                <h4 className='price'>${price}</h4>
            </div>

            <div className="detail">
                <p className='detail__description'>{description}</p>
                <p>Abonalo en <span>3 cuotas sin interés</span> de ${parseInt(price / 3)}</p>
                <p>Llega gratis en 72hs hábiles</p>
            </div>

            <div className="buy">
                <ItemCount stock={stock} initial={1} onAdd={onAdd} updateQuantity={setQuantity} />

                {isProductAdded && (
                <Button variant="outlined">
                    <Link to="/cart">Finalizar compra</Link>
                </Button>
                )}
            </div>
        </div>
        </>
    )
}

ItemDetail.propTypes = {
    prop: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        pic1: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string,
    }),
};

export default ItemDetail