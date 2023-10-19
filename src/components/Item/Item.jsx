import './Item.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const Item = ({ item }) => {

    const { name, price, pic1, id } = item;

    return (
        <div className='item-list'>
            <img src={pic1} alt={`Articulo ${name}`}></img>
            <h3>{name}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>
                <Button variant="contained">Ver detalles</Button>
            </Link>
        </div>
    )
}


Item.propTypes = {
    item: PropTypes.object
}

export default Item