import React from 'react'
import {Link } from 'react-router-dom'

function Navbar() {
  return (<>
    <div>

      
      
       <div className="flex p-2 justify-center justify-evenly  items-center border-b border-gray-300 flex-wrap gap-20 w-80%">
    
        <div className="flex items-center">
        <img src="src/components/Photos/logo.avif" className="w-30 h-8"/>
        </div>
    
        <div className="">
        <input type="text" placeholder="Search for restaurant" className="border border-gray-200 rounded-md py-1 px-2"/>
        </div>
        
        <div className="flex  gap-4 justify-center">
          <button className=" py-1 rounded-md">Login</button>
          <button className=" py-1 rounded-md">Sing up</button>
        </div>
        
      </div>

      <div className='flex p-2 justify-center justify-evenly  items-center border-b border-gray-300 flex-wrap gap-20 w-80%'> 
      <Link to="/dinning"><button> Dinning Out</button></Link>
     <Link to='/delevry'><button>Delevery</button></Link>
      </div>

    </div>
        
  </>)
}

export default Navbar