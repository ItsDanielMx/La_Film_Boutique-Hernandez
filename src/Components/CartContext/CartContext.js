import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const getProdId = (id) => cartList.find(e => e.id === id) || null

    const addToCart = (item, quantity) => {
        const found = getProdId(item.id)
        if(!found) {
            item.quantity = quantity
            setCartList([...cartList, item])
        } else {
            if(found.quantity + quantity > found.stock)
            return false
            found.quantity += quantity
        }
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.id !== id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([])
    }

    const totalPorItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].quantity;
    }

    const subTotal = () => {
        let totalPerItem = cartList.map(item => totalPorItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const iva = () => {
        return subTotal() * 0.16 ;
    }

    const total = () => {
        return iva() + subTotal() ;
    }

    const ItemsInCart = () => {
        let quantitys = cartList.map(item => item.quantity);
        return quantitys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, totalPorItem, subTotal, iva, total, ItemsInCart}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
