import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);
  const [compra, setCompra] = useState(false);
  // const test = useContext(CartContext);
  const {addToCart} = useContext(CartContext)
  const navigate = useNavigate()
  const onAdd = () => {
      setCompra(true)
      addToCart(item, count)
  }
  return (
    <section className="camaras container">
    <div id={`camera${item.id}`}>
      <hr/>
      <div className="camarasTop">
        <img src={item.image} width="50%" height="auto"
          alt={item.name} /> 
        <p className="comprar">
          {item.name} <br />
          {item.description}
          <br /> rental per day:
          ${item.price} <br />
          {compra ? <div><button type="submit" id="cart3" className="btn btn-dark mt-3 mb-3" onClick={()=>{navigate('/Cart')}}>Check Out</button> <br /> 
          <button type="submit" id="cart3" className="btn btn-secondary mb-3" onClick={()=>{navigate('/Productos')}}>Continue Shopping</button> </div> :
          <ItemCount stock={item.stock} initial={1} count={count} setCount={setCount} onAdd={onAdd}></ItemCount>}                    
        </p>
      </div>
      <hr />
    </div>
    </section>
  )
}

export default ItemDetail