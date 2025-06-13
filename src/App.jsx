import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Final from './components/pages/Final/Final'
import DiningOut  from './components/About/Dining-out/DiningOut'

function App() {

  return (
   <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/delevry" element={<Final/>}/>
      <Route path="/dinning" element={<DiningOut/>}/>
     
    </Routes>
   
  </Router>
    
    
   </>
  )

}
export default App
