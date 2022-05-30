import React from 'react'
import ItemCount from '../ItemCount';


const ItemDetail = ({ item }) => {
  return (
    <div id='camera1'>
            <div className="camarasTop">
                <img src={item.image[0]} width="50%" height="auto"
                    alt={item.name} />
                <p className="comprar">
                    {item.description}
                    {item.name}
                    <br /> rental per day
                    ${item.price} <br />
                    <ItemCount stock={item.stock} initial={1}></ItemCount>
                </p>
            </div>
            <hr />
        </div>
  )
}

export default ItemDetail