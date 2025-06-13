import React from 'react'
import { Link } from 'react-router-dom';

function Singnup() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Sign Up</h1>
        <form className='bg-white p-6 rounded shadow-md w-96'>
            <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='username'>Username</label>
            <input className='w-full px-3 py-2 border rounded' type='text' id='username' name='username' required />
            </div>
            <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='email'>Email</label>
            <input className='w-full px-3 py-2 border rounded' type='email' id='email' name='email' required />
            </div>
            <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='password'>Password</label>
            <input className='w-full px-3 py-2 border rounded' type='password' id='password' name='password' required />
            </div>
            <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200' type='submit'>Sign Up</button>
          

        </form>
      <p className='mt-2 text-gray-600'>Already have an account? <a href='/login' className='text-blue-500 hover:underline'>Login</a></p>

           <Link to="/"> <button className='w-30% bg-transprant text-blue-600 py-2  rounded  transition duration-200' type='submit'> Go to Home Page</button></Link>
    </div>
    
      
      )
}

export default Singnup