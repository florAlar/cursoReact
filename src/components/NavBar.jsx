import React from 'react'
import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <Flex className='navBar' minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>MotoShop</Heading>
                </Box>

                <Spacer />
                <ButtonGroup gap='2'>
                    <Menu>
                        <MenuButton >
                            Marcas
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Yamaha</MenuItem>
                            <MenuItem>Honda</MenuItem>
                            <MenuItem>Harley Davidson</MenuItem>
                            <MenuItem>Triumph</MenuItem>
                            <MenuItem>Kawasaki</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button colorScheme='teal'><CartWidget /></Button>
                </ButtonGroup>

            </Flex>
        </div>
    )
}

export default NavBar