import React from 'react'
import { Link } from 'react-router-dom'

const  Header = () => {
  return (
    <div className='flex justify-between items-center p-5 md:px-10 border-b shadow mb-10 '>
      <Link to="/" className='flex items-center'>
      <img src="/src/assets/movie-logo (1).png" alt="" width={80} />

      <h2 className='font-bold text-2xl max-sm:hidden'>Filmania</h2>
      
      </Link>

      <Link className='border rounded-full px-5 hover:bg-black hover:text-white transition'
       to="/create">Film Oluştur</Link>
    </div>
  )
}

export default Header
