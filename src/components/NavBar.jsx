import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'

import Brand from './Brand'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                    <Brand/>
                </Box>
                <Menu>
                    <MenuButton className='btn'>
                    Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Equipos Armados</MenuItem>
                        <MenuItem>Componentes</MenuItem>
                        <MenuItem>Monitores</MenuItem>
                        <MenuItem>Periféricos</MenuItem>
                        <MenuItem>Notebooks</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>
                    <CartWidget/>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar