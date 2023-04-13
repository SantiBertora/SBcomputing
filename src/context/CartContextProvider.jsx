import React from 'react'
import { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarProducto = (productoParaCarrito) => {
        const index = cart.findIndex(producto => producto.id === productoParaCarrito.id);
        if (index === -1) {
            setCart([...cart, productoParaCarrito]);
        } else if (index > -1 && cart[index].cantidad < productoParaCarrito.stock && cart[index].cantidad + productoParaCarrito.cantidad <= productoParaCarrito.stock){
            cart[index].cantidad += productoParaCarrito.cantidad;
            setCart([...cart]);
            toast("Producto agregado al carrito")
        } else {
            swal("No hay mas stock", "Lo sentimos.", "warning");
        }
    }

    const eliminarProducto = (id) => {
        const index = cart.findIndex(producto => producto.id === id);
        cart.splice(index, 1);
        setCart([...cart]);
    }

    const vaciarCarrito = () => {
        setCart([]); 
    }

    const totalCarrito = () => {
        return cart.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    }

    return (
        <>
        <ToastContainer/>
        <CartContext.Provider value={{cart, setCart, agregarProducto, eliminarProducto, vaciarCarrito, totalCarrito }}>{children}</CartContext.Provider>
        </>
    )
}

export default CartContextProvider