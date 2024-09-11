import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import Cart from "./Components/Cart.jsx"
import Placeorder from "./Components/Placeorder.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Placeorder' element={<Placeorder/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
