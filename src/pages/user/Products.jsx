import React from "react";
import "./Products.css";
import { cakes } from "../../data/products";

const Products = () => {
  return (
    <>
      {/* Product Header */}
      <section className="m-4">
        <div
          className="container-fluid product-header-container d-flex flex-column p-3 align-items-center rounded"
          style={{ backgroundColor: "#fff5ea" }}
        >
          <h1 className="fw-bold headingColor display-4 menu-hero-header">
            Our Sweet Menu
          </h1>
          <p className="text-muted text-center fs-5 menu-hero-desc">
            Freshly backed favorite for every craving.
          </p>
          <div className="menus m-3 d-flex flex-wrap gap-lg-4 gap-2">
            <button
              className="menus-item-button headingColor"
              style={{ backgroundColor: "rgb(65, 46, 22)", color: "White" }}
            >
              All
            </button>
            <a
              className="menus-item-button headingColor text-decoration-none"
              href="#cakes"
            >
              Cakes
            </a>
            <button className="menus-item-button headingColor">Pastries</button>
            <button className="menus-item-button headingColor">Donuts</button>
            <button className="menus-item-button headingColor">Cookies</button>
            <button className="menus-item-button headingColor">Brownies</button>
            <button className="menus-item-button headingColor">Breads</button>
          </div>
        </div>
      </section>

     {/* Menu Section */}
      <section>
        {/* Cake Menu */}
        <div className="cake-headings" id="cakes">
          <h3 className="text-center headingColor fw-bold">Cakes</h3>
          <hr className="line" />

          <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
            {cakes.map((cake) => (
              <div className="card shadow border-0 cake-card">
                <img
                  className="card-img-top"
                  src={cake.img}
                  alt=""
                  height={"250px"}
                  width={"100%"}
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h4 className="card-title fw-bold headingColor">{cake.title}</h4>
                  <p className="text-muted text-center item-desc">{cake.desc}</p>
                  <p className="fw-bold headingColor fs-5 item-price">{cake.price}</p>
                  <button className="btn add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
