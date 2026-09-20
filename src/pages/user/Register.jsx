import React from "react";
import { Link } from "react-router-dom";
import "././Login.css";
const Register = () => {
  return (
    <>
      <div className="container form-size">
        <div className="shadow p-5 rounded">
          <div className="px-5 py-1 text-center rounded bg-dark text-white">
            <h1 className="fw-bold">Register</h1>
            <h2>Bakery-cakery</h2>
          </div>
          <form className="mt-4">
            <div className="">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>

            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>

            <div className="mt-3">
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" className="form-control" />
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
