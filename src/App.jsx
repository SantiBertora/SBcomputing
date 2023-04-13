import React from 'react'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Error from './components/Error'
import CartContextProvider from './context/CartContextProvider'

const App = () => {


  return (
    <BrowserRouter>
      <ChakraProvider>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={ <ItemListContainer/> }/>
            <Route exact path='/categoria/:categoria' element={ <ItemListContainer/> }/>
            <Route exact path='/producto/:id' element={ <ItemDetailContainer/> }/>
            <Route exact path='/cart' element={ <Cart/> }/>
            <Route exact path='*' element={ <Error/> }/>
          </Routes>
        </CartContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App