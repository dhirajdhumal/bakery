import React, { useRef, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import {toast} from "react-toastify";
import {useEffect} from "react";



const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passRef = useRef(); 


  useState(()=>{
    const registeredSuccess = localStorage.getItem("RegisteredSuccess");
    if(registeredSuccess === "true"){ 
      toast.success("Registration Successful!");
      localStorage.removeItem("RegisteredSuccess");
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passRef.current.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u)=>(
      u.email === email && u.password === password
    ))

    if(user){
      localStorage.setItem("LoggedInSuccess","true")
      localStorage.setItem("LoggedInUser", JSON.stringify(user))
      window.location.href = "/";
    }else{
      toast.error("Invalid Credentials!");
    }

  }
  return (
    <>
      <div className="container form-size">
        <div className="shadow p-5 rounded">
          <div className="px-5 py-1 text-center rounded bg-dark text-white">
            <h1 className="fw-bold">Login</h1>
            <h2>Bakery-cakery</h2>
          </div>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" ref={emailRef}/>
            </div>

            <div className="mt-3">
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" className="form-control" ref={passRef}/>
            </div>

            <button
              className="btn btn-success w-100 mt-3 fs-2 fw-bold"
              type="submit">
              Login
            </button>

            <div className="d-flex justify-content-center">
              <button className="btn btn-warning mt-3 fw-bold" onClick={()=> navigate('/admin/admin-login')}>Admin Login</button>
            </div>

            <p className="text-center mt-2">
              New User?{" "}
              <Link
                className="text-decoration-none text-danger"
                to={"/register"}
              >
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
