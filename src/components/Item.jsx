import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../App.css'

const Item = ({ id,nombre,categoria,imagen }) => {
    return (


        <div className='cardTamaño' key={id}>
            <Card maxW='sm'>
                <CardBody>
                    <Stack className='.stackCardDetail' mt='6' spacing='3'>                    
                        <Text size='md' color='black'>
                            <img className='cardImage' src={imagen} alt={nombre} />
                            <Text color='gray'> {categoria}</Text>
                            <p> {nombre}</p>
                        </Text>                        
                    </Stack>
                </CardBody>
                <Center mb='10px' h='50px'>
                    <Link to={`/item/${id}`} >
                        <Center>
                        <Button backgroundColor='#17ec46'>Ver más</Button>
                        </Center>

                    </Link>
                </Center>
                
            </Card>


            </div >
    )}
export default Item
