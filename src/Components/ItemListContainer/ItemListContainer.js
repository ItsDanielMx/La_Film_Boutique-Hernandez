import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../Utils/Products'

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)

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
        .then((res)=>setDatos(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])
  return (
            <section className="camaras container">
            <h1 className="mt-4 tituloProductos">{greeting}</h1>
            <hr className="container"></hr>
            {/* <div className="contenedor">
                <article>
                    <div className="d-flex justify-content-center">
                        <button className="btn-abrir-popup boton" id="btn-abrir-popup"><i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                    <div className="overlay" id="overlay">
                        <div className="popup" id="popup">
                            <Link to="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><i className="fas fa-times"></i></Link>
                            <div id="carritoFin">
                            </div>
                            <hr className="container" />
                            <div className="pagar">
                                <p className="precioProducto container">Precio total: $<span id="precioTotal">0</span> </p>
                                <button id="pagarTodo" className="btn btn-primary ms-2">Pay</button>
                            </div>
                        </div>
                    </div>
                </article>
                <hr className="container" />
            </div> */}

            {loading ? <p>Cargando...</p> : <ItemList items={datos}/>}

        </section>
    )
}

export default ItemListContainer