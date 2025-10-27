import React,{useState} from "react"
import "./App.css"
import AddShoes from "./components/AddShoes"
import Store from "./components/Store"
import Cart from "./components/Cart"
import { Routes, Route } from "react-router"
import Navigation from "./components/UI/Navigation"



function App() {
  const [showCart, setShowCart] = useState(false);

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
    </>
  )
}

export default App
