import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { CartContext } from '../CartContext/CartContext'
import CartEmpty from './CartEmpty';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../Utils/Firebase';

function Cart() {
    const {cartList, removeItem, clear, totalPorItem, total, iva, subTotal} = useContext(CartContext)

    const confirmPurchase = () => {
        

            const itemsForDB = cartList.map(item => ({
                id: item.idItem,
                price: item.price,
                title: item.name,
                quantity: item.quantity
            }))
            let order = {

                buyer: {
                    email: "cristianoCR7@ronaldo.com",
                    nameBuyer: "Cristiano Ronaldo",
                    phone: " 5533493956"
                },
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
        .then(result => swal("Confirmed purchase", "Your order number is: " + result.id, "success"))
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
    <section className="camaras container">
        
        {
            (cartList.length > 0) ? <h1 className='text-center'>Your cart</h1>
            : <h1 className='text-center'>Your cart is empty</h1>
        }
        {
            cartList.length > 0 ?
            <>
                {cartList.map(item =>
                    <div id={`camera${item.id}`} key={item.id}>
                        <hr/>
                        <div className="camarasTop">
                            <img src={item.image} width="20%" height="auto"
                            alt={item.name} /> 
                            <p className="comprar">
                            {item.name} <br />
                            {item.description}
                            <br /> Unity price:
                            ${item.price} <br />
                            Quantity: {item.quantity} <br />
                            Subtotal
                            ${totalPorItem(item.id)} <br />
                            <button type="submit" id={`deleteButton${item.id}`} className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>              
                            </p>
                        </div>
                        <hr />
                    </div>
                )}
                <div className='totalPrecio container'>
                    <ul className='listaTotal'>
                        <li className="comprar container">Subtotal: ${subTotal()}</li>
                        <li className="comprar container">IVA: ${iva()}</li>
                        <li className="comprar container"><hr className="dropdown-divider" /></li>
                        <li className="comprar container">Total: ${total()}</li>
                    </ul>
                </div>
                <hr className='mb-3'/>
                <div className='container botonesCarrito'>
                    <Link to='/Productos'><button type="submit" id="cart3" className="btn btn-secondary mb-3">Continue shopping</button></Link>
                    <button type="submit" id="cart3" className="btn btn-danger mb-3" onClick={clear}>Delete all</button>
                    <button type="submit" id="cart3" className="btn btn-primary mb-3" onClick={confirmPurchase}>Confirm purchase</button>
                </div>
            </>
            :   <CartEmpty />
        }
    </section>
    
  )
}

export default Cart