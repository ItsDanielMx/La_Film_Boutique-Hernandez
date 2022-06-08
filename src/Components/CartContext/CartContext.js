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
    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
