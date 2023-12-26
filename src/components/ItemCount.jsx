import { React, useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const mostrarMensaje = () => {
        contador != 0 ? alert(`${contador} producto/s agregado/s a tu changuito`) : alert(`Tienes ${contador} producto/s en tu lista`)
    }

    const resta = () => contador > 0 && setContador(contador - 1)


    const suma = () => contador < 10 && setContador(contador + 1)


    return (
        <div>
            <Button colorScheme='teal' size='xs' onClick={resta}>
                -
            </Button>
            <Button onClick={mostrarMensaje} >
                Agregar Al Carrito {contador}
            </Button>
            <Button colorScheme='teal' size='xs' onClick={suma}>
                +
            </Button>
        </div>
    )
}

export default ItemCount