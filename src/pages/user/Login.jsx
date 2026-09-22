import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container form-size">
        <div className="shadow p-5 rounded">
          <div className="px-5 py-1 text-center rounded bg-dark text-white">
            <h1 className="fw-bold">Login</h1>
            <h2>Bakery-cakery</h2>
          </div>
          <form className="mt-4">
            <div className="">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>

            <div className="mt-3">
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" className="form-control" />
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
