import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (


        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>                    
                        <Text size='md' color='black'>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <Text color='gray'> {producto.categoria}</Text>
                            <p> {producto.nombre}</p>
                        </Text>                        
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Link to={`/item/${producto.id}`} >
                        <Button>Ver más</Button>
                    </Link>
                </CardFooter>
                <Divider />
            </Card>


            </div >
    )}
export default Item
