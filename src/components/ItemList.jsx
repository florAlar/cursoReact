import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'
import '../App.css'


const ItemList = ({ items }) => {
    return (
        <> 

            
            <SimpleGrid className='fullwidth' columns={3}  spacingX='15px' spacingY='15px' m='10px' mt='50px' >
                {items?.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        categoria={item.categoria}
                        descripcion={item.descripcion}
                        imagen={item.imagen}
                        nombre={item.nombre}
                        stock={item.stock}
                        precio={item.precio}
                        item={item}
                    />
                ))}
            </SimpleGrid>
            </>
    )
}
export default ItemList