import React from "react";
import { addToCart } from "./addToCart";
import { cookies } from "../../data/products";
import { useNavigate } from "react-router-dom";

const CookiesMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cake-headings" id="cookies">
        <h3 className="text-center headingColor fw-bold">Cookies</h3>
        <hr className="line" />

        <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
          {cookies.map((cookie) => (
            <div
              className="card shadow border-0 cake-card cake-card-2"
              style={{ height: "472px" }}
            >
              <img
                className="card-img-top"
                src={cookie.img}
                alt=""
                height={"250px"}
                width={"100%"}
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h4 className="card-title cake-card-2-title fw-bold headingColor">
                  {cookie.title}
                </h4>
                <p className="text-muted text-center item-desc">
                  {cookie.desc}
                </p>
                <p className="fw-bold headingColor fs-5 item-price">
                  {cookie.price}
                </p>
                <button
                  className="btn add-to-cart-menu"
                  onClick={() => addToCart(cookie, navigate)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CookiesMenu;
