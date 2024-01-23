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
                    <Heading size='md'>MotoShop</Heading>
                    </Link>
                </Box>

                <Spacer />
                <ButtonGroup gap='2'>
                    <Menu>
                        <MenuButton >
                            Marcas
                        </MenuButton>
                        <MenuList>
                            <Link to='/category/Yamaha'><MenuItem>Yamaha</MenuItem></Link>
                            <Link to='/category/Honda'><MenuItem>Honda</MenuItem></Link>
                            <Link to='/category/Harley Davidson'><MenuItem>Harley Davidson</MenuItem></Link>
                            
                            <Link to='/category/Kawasaki'><MenuItem>Kawasaki</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    <Link to={'/cart'}>
                    <Button className='fondoCart' ><CartWidget /></Button>
                    </Link>
                </ButtonGroup>

            </Flex>
        </div>
    )
}

export default NavBar