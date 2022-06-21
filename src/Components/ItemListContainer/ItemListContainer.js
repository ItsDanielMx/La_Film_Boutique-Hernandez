import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../Utils/Products'
import { useParams } from 'react-router-dom'
import { firestoreFetch } from '../Utils/FirestoreFetch';


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

  return (
            <section className="camaras container">
            <h1 className="mt-4 tituloProductos">{greeting}</h1>
            <hr className="container"></hr>
            {loading ? <div className="loading show">
            <div className="spin"></div>
            </div> : <ItemList items={datos}/>}

        </section>
    )
}

export default ItemListContainer