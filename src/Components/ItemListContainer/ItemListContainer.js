import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../Utils/Products'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryList}=useParams()

    const getData = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(()=>{
            if (condition) {
                resolve(products)
            } else {
                reject('algo salio mal')
            }
        },1000)
    })

    useEffect(()=>{
        setLoading(true)
        getData
        .then((res)=>{
            if(!categoryList){
                setDatos(res)
            }else{
                setDatos(res.filter((prod)=> prod.category === categoryList))
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryList])
  return (
            <section className="camaras container">
            <h1 className="mt-4 tituloProductos">{greeting}</h1>
            <hr className="container"></hr>
            {loading ? <div class="loading show">
            <div class="spin"></div>
            </div> : <ItemList items={datos}/>}

        </section>
    )
}

export default ItemListContainer