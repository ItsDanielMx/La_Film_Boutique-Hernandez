import React from 'react'
import ItemCount from '../ItemCount'

const Item = ({ id, title, stock, price, image }) => {
    return (
        <div id='camera{id}'>
            <div className="camarasTop">
                <img src={image} width="50%" height="auto"
                    alt={title} />
                <p className="comprar">
                    {title}
                    <br /> rental per day
                    ${price} <br />
                    <ItemCount stock={stock} initial={1}></ItemCount>
                </p>
            </div>
            <hr />
        </div>
    )
}

export default Item