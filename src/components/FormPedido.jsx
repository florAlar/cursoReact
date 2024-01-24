import { useContext, useState } from 'react'
import { Button, Text, Input, VStack, Heading, Flex } from '@chakra-ui/react'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import '../App.css'


const FormPedido = () => {

const [ name, setName ] = useState ("")
const [ email, setEmail ] = useState ("") 
const [ phone, setPhone ] = useState ("")
const [ orderId, setOrderId ] = useState ("") 


const db = getFirestore()
const ordersCollection = collection(db, "orden")

const askCart = (e) => {
  e.preventDefault()
  
  addDoc(ordersCollection, order).then(({id}) => 
  setOrderId(id))
}

const [ cart, setCart ] = useContext(CartContext)

const order = {
  buyer: { name, email, phone },
  items: cart,
  date: Date()
}

return (
  <VStack spacing={4} align="center" mt='50px'>
    <Flex alignItems='end' gap='5px' mb='15px'>
            
            <Text>A continuación ingrese sus datos <strong> para que google conquiste el mundo</strong> </Text>
            </Flex>
    <form onSubmit={askCart} style={{ width: '300px' }}>
      <Input
        className='onFocus'
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        mb={2}
        w="100%"
      />
      <Input
      className='onFocus'
        type="email"
        placeholder="e-mail"
        onChange={(e) => setEmail(e.target.value)}
        mb={2}
        w="100%"
      />
      <Input
      className='onFocus'
        type="tel"
        placeholder="Teléfono"
        onChange={(e) => setPhone(e.target.value)}
        mb={2}
        w="100%"
      />
      <Button variant='outline' type="submit" backgroundColor='#17ec46' w="100%">
        Enviar
      </Button>
    </form>
    {orderId && (
      <Text mt={4} fontWeight="bold">
        Orden ID: {orderId}
      </Text>
    )}
  </VStack>
);
};

export default FormPedido;