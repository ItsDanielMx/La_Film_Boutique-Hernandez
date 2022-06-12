import React from 'react'
import { Link } from 'react-router-dom'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const CartEmpty = () => {
  return (
    <div>
        <i className='goShopping mb-5 mt-5'><ProductionQuantityLimitsIcon sx={{ fontSize: 300 }} /></i>
        <Link to='/Productos' className='goShopping'><button type="submit" id="cart3" className="btn btn-secondary mb-3">Go shopping</button></Link>
    </div>
  )
}

export default CartEmpty