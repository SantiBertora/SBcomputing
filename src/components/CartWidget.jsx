import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const CartWidget = () => {

  const {cart} = useContext(CartContext);
  const totalProductos = cart.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <div className='cartWidget'>
      <span className="material-symbols-outlined">
        shopping_cart
      </span>
      <span>{totalProductos}</span>
    </div>
  )
}

export default CartWidget