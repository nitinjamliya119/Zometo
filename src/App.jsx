import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom' 
import Navbar from './components/Header/Navbar'
import Fotter from './components/Fotter/Fotter'
import Home from './components/pages/Home'
import Final from './components/pages/Final/Final'
import DiningOut from './components/About/Dining-out/DiningOut'
import Login from './components/pages/login'
import Singnup from './components/pages/Singnup'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
        
          <Route path="/" element={<Navigate to="/dinning" />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/delevry" element={<Final />} />
          <Route path="/dinning" element={<DiningOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singnup" element={<Singnup />} />
          
          
          

        </Routes>

        <Fotter />
      </Router>
    </>
  )
}

export default App
