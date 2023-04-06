import React from 'react'
import { Spinner } from '@chakra-ui/react'

const loading = () => {
  return (
    <div>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
        Cargando productos...
    </div>
  )
}

export default loading