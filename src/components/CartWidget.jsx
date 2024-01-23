import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../App.css'


const CartWidget = () => {
  
  const [cart, setCart] = useContext(CartContext);

  const cantidad = () => {
    return cart.reduce((acu, item) => acu + item.stock, 0);
  };

  useEffect(() => {
    const keepCart = localStorage.getItem('cart');
    if (keepCart) {
      setCart(JSON.parse(keepCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])


  return (
    <Link to="/Cart">
      
        <div>
        <span className='cantidadCarrito'>{cantidad()}</span>
        <button />
        <svg className='iconCarrito' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
        </div>
        
      
    </Link>
  );
};

export default CartWidget;
