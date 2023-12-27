
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailConteiner />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/cart" element={<Cart />} />



      </Routes>

    </BrowserRouter>
  )
}

export default App