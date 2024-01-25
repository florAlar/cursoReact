import React from 'react'
import Hero from './Hero'
import ItemListConteiner from './ItemListConteiner'
import MenuHome from './MenuHome'


const Home = () => {
  return (
    <div>
        <div><Hero/></div>
        <div><MenuHome/></div>
        
        <div><ItemListConteiner/></div>
    </div>
  )
}

export default Home