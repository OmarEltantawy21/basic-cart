import React from 'react'
import AppNavbar from './Components/AppNavbar'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App