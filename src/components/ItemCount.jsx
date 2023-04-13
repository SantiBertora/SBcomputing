import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const ItemCount = ({producto}) => {
    
    const {agregarProducto} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const sumar = () => {
        contador < producto.stock ? setContador(contador + 1) : alert('No hay mas stock');
    }

    const restar = () => {
        contador > 0 ? setContador(contador - 1) : alert('No hay productos');
    }

    const obtenerProducto = () => {
        const productoParaCarrito = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            stock: producto.stock,
            imagen: producto.imagen,
            cantidad: contador
        }
        agregarProducto(productoParaCarrito);
    }

    return (
        <div>
            <div className='contador'>
                <button onClick={sumar}>+</button>
                <h5>{contador}</h5>
            <   button onClick={restar}>-</button>
            </div>
            <button onClick={obtenerProducto}>
                Agregar al carro
            </button>
        </div>
    )
}

export default ItemCount