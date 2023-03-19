import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Brand from './Brand'

const NavBar = () => {
    return (
        <div className='header'>
            <Flex>
                <Box p='4'>
                    <Link to={'/'}><Brand/></Link>
                </Box>
                <Menu>
                    <MenuButton className='btn'>
                    Categorías
                    </MenuButton>
                    <MenuList>
                        <Link to={`/categoria/equipos`}><MenuItem>Equipos Armados</MenuItem></Link>
                        <Link to={`/categoria/componentes`}><MenuItem>Componentes</MenuItem></Link>
                        <Link to={`/categoria/monitores`}><MenuItem isDisabled="true">Monitores</MenuItem></Link>
                        <Link to={`/categoria/perifericos`}><MenuItem isDisabled="true">Periféricos</MenuItem></Link>
                        <Link to={`/categoria/notebooks`}><MenuItem isDisabled="true">Notebooks</MenuItem></Link>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4' className='cartWidget'>
                    <Link to={'/Cart'}><CartWidget/></Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar