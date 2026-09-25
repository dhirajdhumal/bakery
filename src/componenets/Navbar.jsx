import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '././Navbar.css'
import {toast} from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("LoggedInUser")))
  const navigate = useNavigate();

  function handleLogout(){
    toast.success("Logout Successful!");
    localStorage.removeItem("LoggedInUser");
    setUser(null);
    navigate('/login');
  }
  return (
    <>
      <nav className=' navbar d-flex justify-content-end gap-4 bg-dark fs-4 p-2'>
        <Link className='text-decoration-none text-white nav-items' to={'/'}>Home</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/products'}>Menu</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/gallery'}>Gallery</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/orders'}>Orders</Link>
        <Link className='text-decoration-none text-white nav-items' to={'/cart'}>Cart</Link>
        <Link className='text-decoration-none text-white nav-items' to={'about-us'}>AboutUs</Link>
        {
          user && <Link className='text-decoration-none text-white nav-items' to={'profile'}>Profile</Link>
        }
        
        {
          user ? (
            <>
             <button className='btn btn-danger px-3 fs-5' onClick={handleLogout}>
              Logout
             </button>
            </>
            
          ) :
          (
            <Link className='text-decoration-none text-white nav-items btn btn-warning px-3 fs-5' to={'/login'}>Login</Link>
          )
        }
        
   </nav>
    </>
  )
}

export default Navbar
