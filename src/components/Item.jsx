import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

  return (
    <Link to={`/producto/${producto.id}`}>
    <Card maxW='sm' className='card'>
      <CardBody>
        <Image
          src={producto.imagen} alt={producto.nombre}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3' className='cardContent'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text>
            Disponibles: {producto.stock}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </Link>
  )
}

export default Item