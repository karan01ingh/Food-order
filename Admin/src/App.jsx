import React from 'react'
import './App.css'
// import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
// import Sidebar from './Components/Sidebar.jsx'
import Orders from './Pages/Orders.jsx'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import AddItem from './Pages/AddItem.jsx'
import ListItem from './Pages/ListItem.jsx'
import Home from './Pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/AddItem' element={<AddItem/>}/>
        <Route path='/ListItem' element={<ListItem/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
