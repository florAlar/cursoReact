import React from 'react'
import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return (
        <div>
            <Flex className='navBar' minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Link to={'/'}>
                        <img className='logo' src='../src/assets/logoMotoShop.png' alt='logo del ecommerce' />
                    </Link>
                </Box>

                <Spacer />
                <ButtonGroup gap='2'>
                    <Menu bg='#000000'>
                        <MenuButton m='5' color='#ffffff'>
                            Marcas
                        </MenuButton>
                        <MenuList color='#ffffff' bg='#000000'>
                            <Link to='/category/Yamaha'><MenuItem bg='#000000'>Yamaha</MenuItem></Link>
                            <Link to='/category/Honda'><MenuItem bg='#000000'>Honda</MenuItem></Link>
                            <Link to='/category/Harley Davidson'><MenuItem bg='#000000'>Harley Davidson</MenuItem></Link>

                            <Link to='/category/Kawasaki'><MenuItem bg='#000000'>Kawasaki</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    <Link to={'/cart'}>
                        <Button color='#ffffff' bg='#000000' ><CartWidget /></Button>
                    </Link>
                </ButtonGroup>

            </Flex>
        </div>
    )
}

export default NavBar