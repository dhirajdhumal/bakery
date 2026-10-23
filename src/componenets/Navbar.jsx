import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "././Navbar.css";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartItemContext } from "../contextapi/CartItemContext";

const Navbar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("LoggedInUser")),
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useContext(CartItemContext);
  const navigate = useNavigate();

  function handleLogout() {
    toast.success("Logout Successful!");
    localStorage.removeItem("LoggedInUser");
    setUser(null);
    navigate("/login");
  }
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg  fs-5 p-1"
        style={{ backgroundColor: "#f5dfc5" }}
      >
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

        <button
          className="navbar-toggler mx-2 border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse text-center justify-content-end ${isMenuOpen ? "show" : "collapse"}`}
        >
          <div className="navbar-nav d-flex flex-lg-row align-items-center text-center gap-lg-3 fs-5 gap-2 mt-lg-0 p-2 p-lg-0 mt-1 collapse-menu">
            <Link
              className="text-decoration-none nav-items"
              to={"/"}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-decoration-none  nav-items"
              to={"/products"}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              className="text-decoration-none  nav-items"
              to={"/gallery"}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>

            {user && (
              <Link
                className="text-decoration-none  nav-items"
                to={"/orders"}
                onClick={() => setIsMenuOpen(false)}
              >
                Orders
              </Link>
            )}

            <Link
              className="text-decoration-none  nav-items"
              to={"about-us"}
              onClick={() => setIsMenuOpen(false)}
            >
              AboutUs
            </Link>

            {user && (
              <Link
                className="text-decoration-none  nav-items"
                to={"profile"}
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            )}

            <Link
              className="text-decoration-none  nav-items"
              to={"/cart"}
              onClick={() => setIsMenuOpen(false)}
            >
              {" "}
              <div className="position-relative d-inline-block">
                <i className="bi bi-cart3 fs-3"></i>

                {cartItems.length > 0 && (
                  <span
                    className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger"
                    style={{ marginTop: "5px" }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>

            {user ? (
              <>
                <button
                  className="btn btn-danger px-3 fs-5"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                className="text-decoration-none  btn add-to-cart px-3 fs-5"
                to={"/login"}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
