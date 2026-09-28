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
      <nav className='navbar sticky-top navbar-expand-lg  fs-5 p-1' style={{backgroundColor: "#f5dfc5"}}>
        



         <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            className="navbar-logo"
            src="/images/Bakery Logo.png"
            alt="Bakery Logo"
            height="40px"
          />
          <span
            className="fw-bold ms-3"
            style={{ textShadow: "0 0 1px black" }}
          >
            Bakery-Cakery
          </span>
        </Link>

     



        <button className="navbar-toggler mx-2 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon icon"></span>
        </button>

        <div className='collapse navbar-collapse text-center justify-content-end' id='navbarNavAltMarkup'>
          <div className='navbar-nav d-flex flex-lg-row align-items-center text-center gap-lg-3 fs-5 gap-2 mt-lg-0 p-2 p-lg-0 mt-1 collapse-menu'>
            <Link className='text-decoration-none nav-items' to={'/'}>Home</Link>
            <Link className='text-decoration-none  nav-items' to={'/products'}>Menu</Link>
            <Link className='text-decoration-none  nav-items' to={'/gallery'}>Gallery</Link>
            <Link className='text-decoration-none  nav-items' to={'/orders'}>Orders</Link>
            <Link className='text-decoration-none  nav-items' to={'/cart'}>Cart</Link>
            <Link className='text-decoration-none  nav-items' to={'about-us'}>AboutUs</Link>
          
            
            {
              user && <Link className='text-decoration-none  nav-items' to={'profile'}>Profile</Link>
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
                <Link className='text-decoration-none  nav-items btn btn-warning px-3 fs-5' to={'/login'}>Login</Link>
              )
            }

          </div>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
