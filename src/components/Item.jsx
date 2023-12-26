import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({ imagen, nombre, descripcion, precio, marca }) => {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    {<Image
                        src={imagen}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />}

                    <Stack mt='6' spacing='3'>
                        <Text>
                            {marca}
                        </Text>
                        <h1 size='md'>{nombre}</h1>
                        <Text>
                            {descripcion}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount />
                    </ButtonGroup>
                </CardFooter>
                <Divider />
            </Card>
        </div>
    )
}

export default Item