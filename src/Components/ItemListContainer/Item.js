import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'

const Item = ({ product }) => {
    const {id, name, stock, price, image } = product
    return (
        <div id={`camera${id}`}>
            <div className="camarasTop">
                <img src={image} width="40%" height="auto"
                    alt={name} />
                <p className="comprar">
                    {name}
                    <br /> rental per day:
                    ${price} <br />
                    <ItemCount stock={stock} initial={1}></ItemCount>
                    <Link to={`/detail/${id}`}><button type="submit" id="cart3" className="btn btn-secondary mb-3">Details</button></Link>
                </p>
            </div>
            <hr />
        </div>
    )
}

export default Item