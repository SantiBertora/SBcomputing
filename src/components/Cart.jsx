import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Card, Image, Stack, Heading, Text, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Formulario from './Formulario'

const Cart = () => {

const {cart, vaciarCarrito, eliminarProducto, totalCarrito} = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 && <h1>No hay productos en el carrito <a href="/">Volver a catálogo</a></h1>}
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      {cart.map((producto) => (
        
        <Card
        key={producto.id}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={producto.imagen}
          alt={producto.nombre}
        />
      
        <Stack>
          <CardBody>
            <Heading size='md'>{producto.nombre}</Heading>
      
            <Text py='2'>
              {producto.precio}
            </Text>
            <Text py='2'>
              {producto.cantidad}
            </Text>
          </CardBody>
      
          <CardFooter>
            <Button onClick={() => eliminarProducto(producto.id)} variant='solid' colorScheme='blue'>
              Eliminar
            </Button>
          </CardFooter>
        </Stack>
      </Card>)
      )}
      <h1>Total: {totalCarrito()}</h1>
      {cart.length > 0 && <Formulario/>}
    </div>
  )
}

export default Cart