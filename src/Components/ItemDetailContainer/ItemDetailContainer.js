import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../ItemListContainer/Products';
import CustomFetch from '../Utils/CustomFetch';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [dato, setDato] = useState([])
    const { idItem } = useParams();
    useEffect(() => {
        CustomFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
  return (
    <ItemDetail item={dato} />
  )
}

export default ItemDetailContainer