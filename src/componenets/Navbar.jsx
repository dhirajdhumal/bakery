import React from 'react'
import {Link} from 'react-router-dom'
import '././Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className=' navbar d-flex justify-content-end gap-4 bg-dark fs-4 p-2'>
        <Link className='text-decoration-none text-white nav-items' to={'/'}>Home</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/products'}>Menu</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/gallery'}>Gallery</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/orders'}>Orders</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/cart'}>Cart</Link>
        <Link className='text-decoration-none text-white nav-items' to={'about-us'}>AboutUs</Link>
        <Link className='text-decoration-none text-white nav-items bg-warning  rounded px-3' to={'/login'}>Login</Link>
   </nav>
    </>
  )
}

export default Navbar
