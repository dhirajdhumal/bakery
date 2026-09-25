import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "././Login.css";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();

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
    
    localStorage.setItem("RegisteredSuccess", "true");
    localStorage.setItem("users", JSON.stringify(existingUsers));

    window.location.href = "/login";

    nameRef.current.value = "";
    emailRef.current.value = "",
    passRef.current.value = ""
  }

  return (
    <>
      <div className="container form-size">
        <div className="shadow p-5 rounded">
          <div className="px-5 py-1 text-center rounded bg-dark text-white">
            <h1 className="fw-bold">Register</h1>
            <h2>Bakery-cakery</h2>
          </div>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" ref={nameRef}/>
            </div>

            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" ref={emailRef}/>
            </div>

            <div className="mt-3">
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" className="form-control" ref={passRef}/>
            </div>

            <button
              className="btn btn-success w-100 mt-3 fs-2 fw-bold"
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
