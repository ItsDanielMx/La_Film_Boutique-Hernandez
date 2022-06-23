import React, { useState, useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../Utils/Firebase';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';

const Checkout = () => {
    const [data, setData]= useState({})
    const [orderId, setOrderId]= useState(false)
    const {cartList, clear, total}= useContext(CartContext)

    const handleChange = (event) =>{
        const {name, value}= event.target;
        setData({...data, [name]: value})
    }

    console.log(data)

    const confirmPurchase = (event) => {
        event.preventDefault()
        const itemsForDB = cartList.map(item => ({
            id: item.idItem,
            price: item.price,
            title: item.name,
            quantity: item.quantity
        }))
        let order = {

            buyer: data,
            date: serverTimestamp(),
            total: total(),
            items: itemsForDB
        }
        
    const createOrder = async () => {
        const newOrderRef = doc(collection(db, "Orders"))
        await setDoc(newOrderRef, order)
        return newOrderRef
    }
    createOrder()
    .then(result => setOrderId(result.id))
    .catch(err => console.log(err))

    cartList.forEach(async (item) => {
        const itemRef = doc(db, "Products", item.idItem)
        await updateDoc(itemRef, {
            stock: increment(-item.quantity)
        })
    })

    clear()
}
  return (
    <div>
      { !orderId 
      ?<>
        <h1 className="talk container pt-5">Checkout</h1>
        <hr className="container" />
        <section className="contacto container">
            <form className="row g-3" onSubmit={confirmPurchase}>
                <div className="input-group mb-3">
                    <input className="form-control" 
                        required
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    <input className="form-control" 
                        required
                        type='text'
                        name='lastname'
                        placeholder='Lastname'
                        onChange={handleChange}
                    />
                </div>
                <input className="form-control" 
                    required
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    />
                <input className="form-control" 
                    required
                    type='phone'
                    name='phone'
                    placeholder='Phone number'
                    onChange={handleChange}
                    />
                <input className="btn btn-dark mb-3"
                type='submit'
                value='Finalizar compra'/>
            </form>
        </section>
        </>
        :<div className=" container">
        <h2 className="talk container pt-5">Muchas gracias por tu compra!</h2>
        <hr className="container" />
        <span className="d-flex justify-content-center">
        <LocalShippingIcon sx={{ fontSize: 400 }}/>
        <VerifiedIcon sx={{ fontSize: 100 }}/>
        </span>
        <h3 className="talk container pt-5 mb-5 pb-5">Su orden es : {orderId}</h3>
        </div>}
    </div>
  )
}

export default Checkout