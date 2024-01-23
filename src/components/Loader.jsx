import { Spinner } from '@chakra-ui/react'
import '../App.css'

const Loader = () => {

  return (
        <Spinner className='center' color='red.500' size='xl' thickness='4px' />
  )
}

export default Loader