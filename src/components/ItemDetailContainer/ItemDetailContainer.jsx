import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import db from '../../utils/firebaseConfig';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Codifico  el parámetro id antes de usarlo en la URL o en la consulta de la base de datos.
    const encodedId = encodeURIComponent(id);
    const [item, setItem] = useState({})

    const productFilter = async () => {
        const docRef = doc(db, "items", encodedId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            let product = docSnapshot.data();
            product.id = docSnapshot.id;
            setItem(product);
        } else {
            navigate('/*'); 
        }
    }

    useEffect(() => {
        productFilter()
    }, [])

    return (
        <>
            {Object.keys(item).length === 0 ? <SpinnerLoader /> : <ItemDetail prop={item} />}
        </>
    )
}

export default ItemDetailContainer

