import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../CartContext/CartContext';

function CartWidget() {
  const {ItemsInCart} = useContext(CartContext)
  return (
    <Badge badgeContent={ItemsInCart()} color="primary" showZero>
      <ShoppingCartIcon sx={{ fontSize: 35 }}/>
    </Badge>
      
  )
}

export default CartWidget