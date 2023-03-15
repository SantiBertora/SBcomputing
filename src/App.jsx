import React from 'react'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'

const App = () => {


  return (
    <>
      <ChakraProvider>
        <header>
          <NavBar/>
        </header>
        
        <ItemListContainer/>


        
      </ChakraProvider>


    </>
  )
}

export default App