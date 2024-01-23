import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Card, Stack, Heading, CardFooter, Box, Button, Image, Text, ButtonGroup } from '@chakra-ui/react';
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
            <Heading size="lg" color="black" mb={1}>
                Tu Compra :
            </Heading>
            <p>Por favor verifica que todo este en orden</p>
            <br />
            <br />
            {cart.map((item) => (
                <Box key={item.id} w="100%">

                    <Card>
                        <Box className='horizontal' p={4} backgroundColor="#ffffff">
                            <Image src={item.imagen} alt={item.nombre} width="40%" height="auto" />

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
                                            ¿Quieres modificar tu compra?
                                        </p>
                                        <ButtonGroup>
                                            <Button variant='outline' colorScheme="black" onClick={() => eraseOne(item.id)}>
                                                Eliminar
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

                </Box>
            ))}
            <Text color="#778751" size="xl" m={4}>
                <big>Total de tu compra : <b><em> ${fullPrice()}.- </em></b></big>
            </Text>

            
            <Button variant='outline' m={4} colorScheme="teal" onClick={clearCart}>
                Vaciar Carrito
            </Button>
            <Link to="/orden">
                <Button m={4}  colorScheme="green">
                    Confirmar compra
                </Button>
            </Link>
        </Container>
    );
};

export default Cart;

