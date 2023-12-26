import React from 'react'
import Item from './Item'

export const ItemList = ({ productos }) => {
    return (
        <div>
            {
                productos.map((p) => {
                    return (
                        <Item
                            key={p.id}
                            imagen={p.imagen}
                            marca={p.marca}
                            nombre={p.nombre}
                            descripcion={p.descripcion}
                            precio={p.precio}
                        />
                    )
                })

            } </div>
    )
}
export default ItemList