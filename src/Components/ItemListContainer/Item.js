import React from 'react'
import ItemCount from '../ItemCount'

const Item = ({ product }) => {
    const {id, name, stock, price, image } = product
    return (
        <div id='camera1'>
            <div className="camarasTop">
                <img src={image} width="50%" height="auto"
                    alt={name} />
                <p className="comprar">
                    {name}
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