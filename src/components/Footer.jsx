import React from 'react'
import '../App.css'
import { Box, Flex  } from '@chakra-ui/react'
import { Stack } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Box>
        <Stack >
          <div className='preFooter' > </div>
          <div className='footer'>
            <Flex>
              <div><img src="../src/assets/logoMotoShop.png" alt="" /></div>
            </Flex>
            

          </div>
        </Stack>
      </Box>
    </>
  )
}

export default Footer