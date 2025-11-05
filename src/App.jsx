<<<<<<< HEAD
import React, { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'
import HomePage from './components/HomePage'
import Navigation from './components/UI/Navigation'
=======
import React,{useState} from "react"
import "./App.css"
import AddShoes from "./components/AddShoes"
import Store from "./components/Store"
import Cart from "./components/Cart"
import { Routes, Route } from "react-router"
import Navigation from "./components/UI/Navigation"


>>>>>>> 97862ddfa1dc2d8933930039482150a37e521b7a

function App() {
  const [showCart, setShowCart] = useState(false);

<<<<<<< HEAD


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
=======
  return (
    <> 
    <div className="d-flex flex-column min-vh-100">
      <Navigation onShowCart={()=> setShowCart(prev => !prev)}/>
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <div className="">
        <Routes>
          <Route path="/" element={<AddShoes />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
>>>>>>> 97862ddfa1dc2d8933930039482150a37e521b7a
    </>
  )
}

export default App
