import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const products = [
        {
            id:1,
            name:'ARRI ALEXA LF or MINI LF',
            price:2500.00,
            description:'lalalalaalalalala',
            image: ['https://res.cloudinary.com/itsdanielmx/image/upload/v1653433855/img/ALEXA-Mini-LF-SP-47-MVF-2-left-front-white_a6zfrt.jpg'],
            stock:5,
        },
        {
            id:2,
            name:'PANASONIC VARICAM LT',
            price:450.00,
            description:'lalalalaalalalala',
            image: ['https://res.cloudinary.com/itsdanielmx/image/upload/v1653433873/img/Panasonic-Varicam_qhixdc.jpg'],
            stock:3,
        },
        {
            id:3,
            name:'ARRI ALEXA MINI CAMERA 4:3 ARRIRAW',
            price:875.00,
            description:'lalalalaalalalala',
            image: ['https://res.cloudinary.com/itsdanielmx/image/upload/v1653433863/img/Arri-Alexa-Mini-PL-1_y1dzww.jpg'],
            stock:14,
        }
    ]

    const getData = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(()=>{
            if (condition) {
                resolve(products)
            } else {
                reject('algo salio mal')
            }
        },3000)
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

            {loading ? <p>Cargando</p> : <ItemList items={datos}/>}

        </section>
    )
}

export default ItemListContainer