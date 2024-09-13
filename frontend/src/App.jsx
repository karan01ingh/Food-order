import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import Cart from "./Components/Cart.jsx"
import Placeorder from "./Components/Placeorder.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fooditem from './Components/Fooditem.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Placeorder' element={<Placeorder/>}/>
          <Route path='/fooditem' element={<Fooditem/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
