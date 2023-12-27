import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({ item }) => {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Text size='lg' color='black'>
                            <img src={item.imagen} alt={item.nombre} />
                            <Text color='black'> {item.categoria}</Text><p>{item.nombre}</p>
                        </Text>
                        <Text color='black'> {item.descripcion}</Text>
                        <Heading color='gray' size={'lg'}> ${item.precio}</Heading>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ItemCount />
                </CardFooter>
                <Divider />
            </Card>
        </div>
    )
}

export default ItemDetail;