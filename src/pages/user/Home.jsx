import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  useEffect(()=>{
    const loggedInSuccess = localStorage.getItem("LoggedInSuccess");
    if(loggedInSuccess === "true"){ 
      toast.success("Login Successful!");
      localStorage.removeItem("LoggedInSuccess");
    }
  },[])
  return (
    <>
      <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{backgroundImage: "url('/images/Bakery Background.png')", height: "636px", backgroundSize: "cover", backgroundPosition: "center"}}>
      
          <h1>WELCOME TO BAKERY CAKERY</h1>
       
        <h2>Freshly Baked, Made With Love ❤️</h2>
        <p> Delicious cakes, pastries and sweet treats
            made fresh with love for every occasion.
        </p>
        <div>
            <a href="products.html" class="hero-button">Explore More</a>
            <a href="cart.html" class="hero-button">Order Now</a>
        </div>
      </div>
    </>
  )
}

export default Home


