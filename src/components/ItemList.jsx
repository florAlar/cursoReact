import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'
import '../App.css'
//falta un import?

const ItemList = ({ items }) => {
    return (

        
            <SimpleGrid className='fullwidth' columns={3}  spacingX='20px' spacingY='20px' m='20px' >
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
        
    )
}
export default ItemList