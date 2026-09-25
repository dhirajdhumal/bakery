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
    <div>  
      This is Home page
    </div>
  )
}

export default Home


