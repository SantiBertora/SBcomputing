import React, { useState } from 'react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)

    return (
        <div className='contador'>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    )
}

export default ItemCount