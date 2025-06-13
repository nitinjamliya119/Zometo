import React from 'react'
import Navbar from '../Header/Navbar'
import DiningOut from '../About/DiningOut'


function Home() {
  return (<>
       <Navbar/>

       <div className='flex flex-col justify-center'>
       <DiningOut/>

        
       </div>


    </>)
}

export default Home