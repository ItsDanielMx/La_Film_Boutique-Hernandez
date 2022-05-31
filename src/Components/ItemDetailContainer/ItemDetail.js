import React from 'react'
import ItemCount from '../ItemCount';


const ItemDetail = ({ item }) => {
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
                    <br /> rental per day
                    ${item.price} <br />
                    <ItemCount stock={item.stock} initial={1}></ItemCount>
                </p>
            </div>
            <hr />
    </div>
    </section>
  )
}

export default ItemDetail