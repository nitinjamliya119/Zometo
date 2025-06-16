import React,{useEffect} from 'react'
import {Link ,useLocation } from 'react-router-dom'

function Navbar() {
   const location = useLocation();

 const getLinkClasses = (path) => {
  return location.pathname === path 
    ? 'flex items-center p-1 rounded-3xl border border-red-500  border-red-500 text-red-600'  // Active
    : 'flex items-center p-1 rounded-3xl hover:border hover:border-red-500 text-gray-600'; // Inactive
};

 
  return (<>

    <div>

      
      
       <div className="flex p-2 justify-between pl-20 pr-20  justify-items-start border-b border-gray-300 flex-wrap  w-80%">
    
        <div className="flex items-center">
        <img src="src/components/Photos/logo.avif" className="w-30 h-8"/>
        </div>
    
        <div className="">
        <input type="text" placeholder="Search for restaurant" className="border border-gray-200 rounded-md max-w-5xl py-1 px-2"/>
        </div>
        
        <div className="flex  gap-4 ">
         
          <Link to="/login"><button className=" py-1 rounded-md ">Login</button></Link>
          <Link to="/singnup"><button className=" py-1 rounded-md">Singn up</button></Link>
        </div>
        
      </div>

      <div className='flex p-2   items-center border-b border-gray-300 flex-wrap gap-20 w-80%'> 

        <Link to="/dinning">
          <button> 
            <div className='flex  items-center  p-1 rounded-3xl hover:border-1 hover:border-red-500'>
              <div className=' p-1.5 w-12 rounded-3xl bg-gray-200 '><img src="src/components/Photos/D-logo-1.avif" alt="" /></div> 
              <div>Dinning Out</div>
            </div>
          </button>
        </Link>
        
        <Link to='/delevry'>
          <button>
            <div className='flex  items-center  p-1 rounded-3xl hover:border-1 hover:border-red-500'>
            <div className='  p-1.5 w-12 rounded-3xl bg-gray-200'><img src="src/components/Photos/D-logo-2.webp" alt="" /></div>
            <div>Delevery</div>
            </div>
          </button>
        </Link>

      </div>

    </div>
        
  </>)
}

export default Navbar