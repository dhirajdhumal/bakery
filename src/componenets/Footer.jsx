import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid text-black py-4" style={{backgroundColor: "#f5dfc5"}}>
        <div className="row mx-5">
          <div className="col-lg-3 col-md-6 ">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                className="navbar-logo"
                src="/images/Bakery Logo.png"
                alt="Bakery Logo"
                height="40px"
              />
              <span
                className="fw-bold ms-3 fs-3"
                style={{ textShadow: "0 0 1px black" }}
              >
                Bakery-Cakery
              </span>
            </Link>
            <p className="text-muted mt-3">
              Freshly baked cakes, pastries and sweet treats made with love for
              every occasion.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-0 mb-3">
            <h4 className="fw-bold">Quick Links</h4>
            <div className="quick-links d-flex flex-sm-column flex-wrap gap-sm-0 gap-3">
              <Link className="text-decoration-none text-muted" to={"/"}>
                Home
              </Link>
              <Link
                className="text-decoration-none text-muted"
                to={"/products"}
              >
                Menu
              </Link>
              <Link className="text-decoration-none text-muted" to={"/gallery"}>
                Gallery
              </Link>
              <Link className="text-decoration-none text-muted" to={"/orders"}>
                Orders
              </Link>
              <Link className="text-decoration-none text-muted" to={"/cart"}>
                Cart
              </Link>
              <Link className="text-decoration-none text-muted" to={"about-us"}>
                AboutUs
              </Link>
              <Link className="text-decoration-none text-muted" to={"/profile"}>
                Profile
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold">Contact Us</h4>
            <p className="text-muted"><i class="bi bi-geo-alt"></i>
              Lingdeo, Akole, Ahilyanager,
              <br />
              Maharashtra 422610
            </p>
            <p className="text-muted"><i class="bi bi-telephone"></i> 9421900342</p>
            <p className="text-muted"><i class="bi bi-envelope"></i> bakerycakery@gmail.com</p>
          </div>
          <div className="col-lg-3 col-md-6 d-flex flex-sm-column flex-row gap-4 gap-sm-0">
            <h4 className="fw-bold">Follow Us</h4>
            <p className="text-muted"><i class="bi bi-facebook"></i></p>
            <p className="text-muted"><i class="bi bi-twitter-x"></i></p>
            <p className="text-muted"><i class="bi bi-instagram"></i></p>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0 text-muted">
          © 2026 Bakery Cakery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
