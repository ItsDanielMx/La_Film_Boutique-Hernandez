import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { firestoreFetch } from '../Utils/FirestoreFetch';


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const { category } = useParams();

    useEffect(() => {
        firestoreFetch(category)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [category]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

  return (
            <section className="camaras container">
            <h1 className="mt-4 tituloProductos">{greeting}</h1>
            <hr className="container"></hr>
            <ItemList items={datos}/>

        </section>
    )
}

export default ItemListContainer