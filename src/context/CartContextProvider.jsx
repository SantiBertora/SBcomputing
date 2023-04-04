import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarProducto = (producto) => {
        setCart([...cart, producto]);
    }

    const eliminarProducto = (id) => {
        const index = cart.indexOf(producto.id);
        cart = cart.splice(index, 1);
        setCart([...cart]);
    }

    const vaciarCarrito = () => {
        setCart([]); 
    }

    const totalCarrito = () => {
        return cart.reduce((total, producto) => total + (producto.price * producto.cantidad), 0);
    }

    return (
        <CartContext.Provider value={{cart, setCart, agregarProducto, eliminarProducto, vaciarCarrito, totalCarrito }}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider