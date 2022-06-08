import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { CartContext } from '../CartContext/CartContext'

function Cart() {
    const test = useContext(CartContext)

    const confirmPurchase = () => {
        swal("Confirmed purchase", "Your order number is: 7436834568", "success");
    }
    
  return (
    <section className="camaras container">
        
        {
            (test.cartList.length > 0) ? <h1 className='text-center'>Your cart</h1>
            : <h1 className='text-center'>Your cart is empty</h1>
        }
        {
            test.cartList.length > 0 ?
            test.cartList.map(item =>
                <div id={`camera${item.id}`}>
                    <hr/>
                    <div className="camarasTop">
                        <img src={item.image} width="20%" height="auto"
                        alt={item.name} /> 
                        <p className="comprar">
                        {item.name} <br />
                        {item.description}
                        <br /> rental per day:
                        ${item.price} <br />
                        {/* Quantity: ? */}
                        <button type="submit" id={`deleteButton${item.id}`} className="btn btn-danger" onClick={() => test.removeItem(item.id)}>Delete</button>              
                        </p>
                    </div>
                    <hr />
                </div>
            )
            : <h1>Cart empty</h1>
        }
        <div className='container botonesCarrito'>
        <Link to='/Productos'><button type="submit" id="cart3" className="btn btn-secondary mb-3">Continue shopping</button></Link>
        <button type="submit" id="cart3" className="btn btn-danger mb-3" onClick={test.clear}>Delete all</button>
        <button type="submit" id="cart3" className="btn btn-primary mb-3" onClick={confirmPurchase}>Confirm purchase</button>
        </div>
        <hr />
    </section>
    
  )
}

export default Cart