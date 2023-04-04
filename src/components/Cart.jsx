import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const Cart = () => {

const {cart, setCart} = useContext(CartContext);
console.log(cart);

  return (
    <div>Cart</div>
  )
}

export default Cart