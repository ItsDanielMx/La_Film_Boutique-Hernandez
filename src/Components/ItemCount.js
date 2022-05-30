import { Add, Remove } from '@mui/icons-material';
import { Button} from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

const increment = () => {
    if (count < stock) {
        setCount(count + 1);
    }
}

const decrement = () => {
    if (count > 1) {
        setCount(count - 1);
    }
}
const carritoAgregado = () => {
    swal({
    position: 'top',
    icon: 'success',
    title: 'El producto se ha agregado correctamente',
    timer: 1500});
}

return (
    <div>
        <Button variant="text" onClick={decrement}><Remove /></Button>
        {count}
        <Button variant="text" onClick={increment}><Add /></Button>
        <br />
        <button type="submit" id="cart3" onClick={carritoAgregado} className="btn btn-primary mb-3">Add to cart</button>
        
    </div>
)
}

export default ItemCount;