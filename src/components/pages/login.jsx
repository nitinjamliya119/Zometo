import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your password" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
      </form>
      <Link to="/"> <button className='w-30% bg-transprant text-blue-600 py-2 mt-4 rounded  transition duration-200' type='submit'> Go to Home Page</button></Link>
    </div>
  )
}

export default login