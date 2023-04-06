import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Card, Image, Stack, Heading, Text, Button, CardBody, CardFooter } from '@chakra-ui/react'

const Cart = () => {

const {cart, setCart, eliminarProducto} = useContext(CartContext);
console.log(cart);

  return (
    <div>
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
    </div>
  )
}

export default Cart