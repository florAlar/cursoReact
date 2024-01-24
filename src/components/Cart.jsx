import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Card, Stack, Heading, CardFooter, Box, Button, Image, Text, ButtonGroup, Divider, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const clearCart = () => {
        setCart([]);
    };

    const eraseOne = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart[itemIndex].stock--;

            if (newCart[itemIndex].stock === 0) {
                newCart.splice(itemIndex, 1);
            }
            setCart(newCart);
        }
    };

    const increaseOne = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart[itemIndex].stock++;

            if (newCart[itemIndex].stock === 0) {
                newCart.splice(itemIndex, 1);
            }
            setCart(newCart);
        }
    };

   
    const fullPrice = () => {
        return cart.reduce((acu, item) => acu + item.precio * item.stock, 0);
    };

    return (
        <Container maxW="xl" >
            <br />
            <br />
            <Flex alignItems='end' gap='5px'>
            <Heading size="md" color="black" mb={1}>Esta Es Tu Compra </Heading>
            <Text>Por favor verifica que <strong> todo </strong>  este en orden</Text>
            </Flex>
            
            <br />
            <br />
            {cart.map((item) => (
                <Box key={item.id} w="100%">

                    <Card>
                        <Box className='horizontal' p={4} backgroundColor="#ffffff">
                            <Image src={item.imagen} alt={item.nombre} width="40%" height="50%" />

                            <Stack spacing={4}>
                                <p color="#778751" size="md">
                                   <b> {item.categoria} {item.nombre} </b>
                                </p>
                                <p color="#778751" size="md">
                                    <big><b>{item.stock}</b> u. x ${item.precio}  </big>
                                </p>

                                <CardFooter>
                                    <Stack>
                                        <p fontSize="lg" fontWeight="bold" color="teal.500" ml={4}>
                                            ¿Quieres modificar la cantidad?
                                        </p>
                                        <ButtonGroup>
                                            <Button variant='outline' colorScheme="black" onClick={() => eraseOne(item.id)}>
                                                Quitar
                                            </Button>

                                            <Button variant='outline' colorScheme="black" onClick={() => increaseOne(item.id)} ml={4}>
                                                Agregar
                                            </Button>
                                        </ButtonGroup>
                                    </Stack>
                                </CardFooter>
                                
                            </Stack>
                            

                        </Box>
                    </Card>
                    <Divider/>
                </Box>
            ))}
            <Text color="#778751" size="xl" m={4}>
                <big>Total de tu compra : <b><em> ${fullPrice()}.- </em></b></big>
            </Text>

            
            <Button variant='outline' m={4} backgroundColor='gray' onClick={clearCart}>
                Vaciar Carrito
            </Button>
            <Link to="/orden">
                <Button m={4}  backgroundColor='#17ec46'>
                    Confirmar compra
                </Button>
            </Link>
        </Container>
    );
};

export default Cart;

