import { Spacer, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const MenuHome = () => {
  return (
    <Stack className='horizontal'>
      <div width='100%' className='bannerPostHero'>
        <p>ENCONTRA LAS MEJORES MARCAS</p>
      </div>
      <Flex mt='50px' alignItems='center'>
      <Spacer />
      <Link to='/category/Honda'>
      <img className='imgHomeMenu' width='150px' src="../src/assets/logoHonda.png" alt="" />
      </Link>
      <Spacer />
      <Link to='/category/Kawasaki'>
      <img className='imgHomeMenu' width='150px' src="../src/assets/logoKawa.png" alt="" />
      </Link>
      <Spacer />
      <Link to='/category/Yamaha'>
      <img className='imgHomeMenu' width='150px' src="../src/assets/logoYamaha.png" alt="" />
      </Link>
      <Spacer />
      <Link to='/category/Harley Davidson'>
      <img className='imgHomeMenu' width='150px' src="../src/assets/logoHarley.png" alt="" />
      </Link>
      <Spacer />
      
      </Flex>
    </Stack>
  )
}

export default MenuHome