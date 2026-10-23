import "./Products.css";
import { useState } from "react";
import CakeMenu from "./Menus/CakeMenu";
import PastrieMenu from "./Menus/PastrieMenu";
import DonutMenu from "./Menus/DonutMenu";
import CookiesMenu from "./Menus/CookiesMenu";
import BrownieMenu from "./Menus/BrownieMenu";
import BreadMenu from "./Menus/BreadMenu";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
            Freshly baked favorite for every craving.
          </p>
          <div className="menus m-3 d-flex flex-wrap gap-lg-4 gap-2">
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "cakes" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("cakes")}
            >
              Cakes
            </button>
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "pastries" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("pastries")}
            >
              Pastries
            </button>
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "donuts" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("donuts")}
            >
              Donuts
            </button>
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "cookies" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("cookies")}
            >
              Cookies
            </button>
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "brownies" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("brownies")}
            >
              Brownies
            </button>
            <button
              className={`menus-item-button headingColor ${
                selectedCategory === "breads" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("breads")}
            >
              Breads
            </button>
          </div>
        </div>
      </section>

     {/* Menu Section */}
      <section>
        {/* Cake Menu */}
        {(selectedCategory === "all" || selectedCategory === "cakes") && (
          <CakeMenu />
        )}

        {/* Pastry Menu */}
        {(selectedCategory === "all" || selectedCategory === "pastries") && (
          <PastrieMenu />
        )}

        {/* Donut Menu */}
        {(selectedCategory === "all" || selectedCategory === "donuts") && (
          <DonutMenu />
        )}

        {/* Cookie Menu */}
        {(selectedCategory === "all" || selectedCategory === "cookies") && (
          <CookiesMenu />
        )}

        {/* Brownie Menu */}
        {(selectedCategory === "all" || selectedCategory === "brownies") && (
          <BrownieMenu />
        )}

        {/* Bread Menu */}
        {(selectedCategory === "all" || selectedCategory === "breads") && (
          <BreadMenu />
        )}
      </section>
    </>
  );
};
export default Products;