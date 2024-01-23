
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext.jsx'
import Footer from './components/Footer'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={ <ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailConteiner />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App