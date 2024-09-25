import React from 'react'
import './App.css'
// import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Orders from './Pages/Orders.jsx'
import { Route,BrowserRouter,Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
