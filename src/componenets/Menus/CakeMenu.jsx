import React from "react";
import { addToCart } from "./addToCart";
import { cakes } from "../../data/products";
import { useNavigate } from "react-router-dom";

const CakeMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cake-headings" id="cakes">
        <h3 className="text-center headingColor fw-bold">Cakes</h3>
        <hr className="line" />

        <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
          {cakes.map((cake) => (
            <a href={cake.link} className="text-decoration-none">
              <div className="card shadow border-0 cake-card">
                <img
                  className="card-img-top"
                  src={cake.img}
                  alt=""
                  height={"250px"}
                  width={"100%"}
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h4 className="card-title fw-bold headingColor">
                    {cake.title}
                  </h4>
                  <p className="text-muted text-center item-desc">
                    {cake.desc}
                  </p>
                  <p className="fw-bold headingColor fs-5 item-price">
                    {cake.price}
                  </p>
                  <button
                    className="btn add-to-cart-menu"
                    onClick={() => addToCart(cake, navigate)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CakeMenu;
