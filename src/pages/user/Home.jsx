import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const loggedInSuccess = localStorage.getItem("LoggedInSuccess");
    if(loggedInSuccess === "true"){ 
      toast.success("Login Successful!");
      localStorage.removeItem("LoggedInSuccess");
    }
  },[])


  return (
    <>
      <div className="text-center d-flex flex-column justify-content-center align-items-center background-img">
        <h1 className='fw-bold fs-2'>WELCOME TO BAKERY CAKERY</h1>
        <h2 className='text-shadow'>Freshly Baked, Made With Love ❤️</h2>

        <p> Delicious cakes, pastries and sweet treats
            made fresh with love for every occasion.
        </p>

        <button className='btn fw-bold text-white px-4 py-2' style={{backgroundColor: "rgb(205, 146, 72)"}} onClick={()=>navigate('/products')}>Explore More</button>
      </div>
    </>
  )
}

export default Home


