import { useContext, useState } from 'react';
import { Button, ButtonGroup, IconButton, Center, } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import '../App.css'

const ItemCount = ({ id, nombre, precio, imagen }) => {
  const [cart, setCart] = useContext(CartContext);
  const [counter, setCounter] = useState(1);


  const min = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("No hay más productos para quitar del carrito.")
    }
  };

  const suma = () => {
    setCounter(counter + 1);
  };

  const addToCart = () => {
    setCart((cartAtm) => {
      const alrdyIn = cartAtm.find((item) => item.id === id);

      if (alrdyIn) {
        return cartAtm.map((item) => {
          if (item.id === id) {
            return { ...item, stock: item.stock + counter }
          } else {
            return item
          }
        })
      } else {
        return [...cartAtm, { id, stock: counter, precio, nombre, imagen }]
      }
    })
  }

  
  return (
    <>
      <ButtonGroup size="md" isAttached variant="outline">
        <Button className='buttonsCount' onClick={min}>-</Button>
        <Center>
          <Button onClick={() => addToCart()} colorScheme="gray">
            Añadir {counter} productos al carrito
          </Button>
        </Center>
        <Button className='buttonsCount' onClick={suma} >+ </Button>
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
