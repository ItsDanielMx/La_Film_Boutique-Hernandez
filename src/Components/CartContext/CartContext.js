import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        const found = cartList.find(el => el.id === el.id)
        const duplicated = (found, cartList) => {
            cartList.forEach(element => {
                if (found.id === element.id) {
                    return element.cantidad = quantity + element.cantidad
                }
            });
        }
        if (found) {duplicated(found, cartList)} else {setCartList([...cartList, item])}
    }

    const removeItem = (id) => {
        const result = cartList.filter(el => el.id !== parseInt(id))
        setCartList(result)
    }

    const clear = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{cartList, addToCart}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
