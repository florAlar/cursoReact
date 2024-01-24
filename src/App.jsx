
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext.jsx'
import Footer from './components/Footer'
import FormPedido from './components/FormPedido.jsx'
import Home from './components/Home.jsx'



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route path='/item/:id' element={<ItemDetailConteiner />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/orden" element={<FormPedido />} />
        </Routes>

      </BrowserRouter>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App