import React from "react";
import "./Products.css";
import { cakes, pastries, donuts, cookies, brownies, breads } from "../../data/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CakeMenu from "../../componenets/Menus/CakeMenu";
import PastrieMenu from "../../componenets/Menus/PastrieMenu";
import DonutMenu from "../../componenets/Menus/DonutMenu";
import CookiesMenu from "../../componenets/Menus/CookiesMenu";
import BrownieMenu from "../../componenets/Menus/BrownieMenu";
import BreadMenu from "../../componenets/Menus/BreadMenu";

const Products = () => {
  const navigate = useNavigate();
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
            <a className="menus-item-button headingColor text-decoration-none" href="#pastries">
              Pastries
            </a>
            <a className="menus-item-button headingColor text-decoration-none" href="#donuts">
              Donuts
            </a>
            <a className="menus-item-button headingColor text-decoration-none" href="#cookies">
              Cookies
            </a>
            <a className="menus-item-button headingColor text-decoration-none" href="#brownies">
              Brownies
            </a>
            <a className="menus-item-button headingColor text-decoration-none" href="#breads">
              Breads
            </a>
          </div>
        </div>
      </section>

     {/* Menu Section */}
      <section>
        {/* Cake Menu */}
        <CakeMenu />

        {/* Pastry Menu */}
        <PastrieMenu />

        {/* Donut Menu */}
        <DonutMenu />

        {/* Cookie Menu */}
        <CookiesMenu />

        {/* Brownie Menu */}
        <BrownieMenu />

        {/* Bread Menu */}
        <BreadMenu />
      </section>
    </>
  );
};
export default Products;