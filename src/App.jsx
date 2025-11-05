import React, { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'
import HomePage from './components/HomePage'
import Navigation from './components/UI/Navigation'

function App() {
  const [showCart, setShowCart] = useState(false);



  return (
    <>
    <div className='d-flex flex-column min-vh-100 '>
      <Navigation onShowCart={()=> setShowCart(prev=> !prev)}/>
      {showCart && <Cart onClose={()=> setShowCart(false)} />}

      <div className='d-flex justify-content-center content'>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/AddProduct" element={ <AddProduct /> } />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </div>

    </div>  
    </>
  )
}

export default App
