import React, { useState } from 'react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const agregarAlCarrito = (e) => {
        console.log(producto)
    }

    return (
        <div>
            <div className='contador'>
                <button onClick={() => setContador(contador + 1)}>+</button>
                <h5>{contador}</h5>
            <   button onClick={() => setContador(contador - 1)}>-</button>
            </div>
            <button onAdd={agregarAlCarrito}>
                Agregar al carro
            </button>
        </div>
    )
}

export default ItemCount