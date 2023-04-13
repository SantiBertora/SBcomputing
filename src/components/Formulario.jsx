import React from 'react'
import { useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const Formulario = () => {

    const [idOrden, setIdOrden] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const { cart, vaciarCarrito } = useContext(CartContext);

    const db = getFirestore()

    const guardarOrden = (e) => {
        e.preventDefault();

        addDoc(ordenes, order).then(({id}) => {setIdOrden(id)});
        vaciarCarrito();
    };

    const order = {
        nombre,
        email,
        telefono,
        cart,
    };

    const ordenes = collection(db, "orden");
  return (
    <div>
        <form onSubmit={guardarOrden}>
            <input type="text" placeholder="Nombre Completo"  required onChange={(e) => setNombre(e.target.value)}/>
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Número de Telefono" required onChange={(e) => setTelefono(e.target.value)}/>
            <button type="submit">Confirmar Compra</button>
        </form>
        <p>El ID de su compra es: <span>{idOrden}</span></p>
    </div>
  )
}

export default Formulario