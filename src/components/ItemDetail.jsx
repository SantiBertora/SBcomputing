import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({producto}) => {

  console.log(producto)

  return (
    <div className='contenedorDetalles'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={producto.imagen} alt={producto.nombre} borderRadius='lg'/>
          <Stack mt='6' spacing='3' className='cardContent'>
            <Heading size='md'>{producto.nombre}</Heading>
            <Text>
              Disponibles: {producto.stock}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${producto.precio}
            </Text>
            <Text className='descripcion'>
              {producto.descripcion}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2' className='contenedorDelContador'>
            <ItemCount/>
            <Button variant='ghost' colorScheme='blue'>
              Agregar al carro
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ItemDetail