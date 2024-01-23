import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, Center, Flex } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import '../App.css'

const ItemDetail = ({ items }) => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const ropaRef = doc(db, "motos", `${id}`);

        getDoc(ropaRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem(snapshot.data());
            } else {
                console.log("Error: No se encuentra el producto");
            }
        });
    }, [id]);

    const itemFilter = items.filter((item) => item.id == id);

    return (
        <Center>
            {itemFilter.map((item) => (
                <div key={item.id}>
                    <Card className='card' align='center'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '50vw' }}
                            src={item.imagen} alt={item.nombre}
                        />

                        <Stack className='stackCardDetail'>
                            <CardBody className='cardDetail' >

                                <Heading color='black' size='md'> {item.categoria} {item.nombre}</Heading>

                                <Text py='2'>
                                    {item.descripcion}
                                </Text>
                                <Heading color='gray' size={'lg'}> ${item.precio} </Heading>

                            </CardBody>

                            <CardFooter>
                                <ItemCount
                                    id={item.id}
                                    nombre={item.nombre}
                                    precio={item.precio}
                                    stock={item.stock}
                                    item={item}
                                    imagen={item.imagen} />
                            </CardFooter>
                        </Stack>
                    </Card>
                </div>
            ))}
        </Center>
    )
}

export default ItemDetail;