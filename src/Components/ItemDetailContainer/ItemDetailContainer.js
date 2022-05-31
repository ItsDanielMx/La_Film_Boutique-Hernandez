import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../Utils/Products';
import CustomFetch from '../Utils/CustomFetch';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [dato, setDato] = useState([])
    const { idItem } = useParams();
    useEffect(() => {
        CustomFetch(2000, products)
            .then(result => setDato(result.find(item => item.id === parseInt(idItem))))
            .catch(err => console.log(err))
    }, []);
  return (
    <ItemDetail item={dato} />
  )
}

export default ItemDetailContainer