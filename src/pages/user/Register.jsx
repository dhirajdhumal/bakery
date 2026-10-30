import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "././Login.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../contextapi/AuthContext";


const Register = () => {
  const navigate = useNavigate();

  const {setRegisteredSuccess} = useContext(AuthContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    }

    console.log(user);
    

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if(existingUsers.some((u) => u.email === user.email)){
      toast.error("User with this email already exists!");
      return;
    }
    
    existingUsers.push(user);
    
    // localStorage.setItem("RegisteredSuccess", "true");
    setRegisteredSuccess(true);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate("/login");

    nameRef.current.value = "";
    emailRef.current.value = "",
    passRef.current.value = ""
  }

  return (
    <>
      <div className="container form-size">
        <div className="shadow p-5 rounded model-info">
          <div className="px-5 py-1 text-center rounded steps-card text-white">
            <h1 className="fw-bold">Register</h1>
            <h2 className="fw-bold steps-card-title">Bakery-cakery</h2>
          </div>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="">
              <label className="form-label fw-bold headingColor" htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" placeholder="Enter your name" ref={nameRef} required/>
            </div>

            <div className="mt-3">
              <label className="form-label fw-bold headingColor" htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" ref={emailRef} required/>
            </div>

            <div className="mt-3">
              <label className="form-label fw-bold headingColor" htmlFor="pass">Password</label>
              <input type="password" id="pass" className="form-control" placeholder="Enter your password" ref={passRef} required/>
            </div>

            <button
              className="btn add-to-cart w-100 mt-3 fs-2 fw-bold"
              type="submit"
            >
              Register
            </button>

            <p className="text-center mt-3">Already User? {" "}
              <Link className="text-decoration-none text-danger" to={"/login"}>
                 Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
