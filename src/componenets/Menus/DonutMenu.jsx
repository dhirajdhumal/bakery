import React from "react";
import { donuts } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartItemContext } from "../../contextapi/CartItemContext";

const DonutMenu = () => {
  const navigate = useNavigate();
  const {addToCart} = useContext(CartItemContext);

  return (
    <>
      <div className="cake-headings" id="donuts">
        <h3 className="text-center headingColor fw-bold">Donuts</h3>
        <hr className="line" />

        <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
          {donuts.map((donut) => (
            <div className="card shadow border-0 cake-card">
              <img
                className="card-img-top"
                src={donut.img}
                alt=""
                height={"250px"}
                width={"100%"}
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center p-1">
                <h4 className="card-title fw-bold headingColor">
                  {donut.title}
                </h4>
                <p className="text-muted text-center item-desc">{donut.desc}</p>
                <p className="fw-bold headingColor fs-5 item-price">
                  ₹{donut.price}
                </p>
                <button
                  className="btn add-to-cart-menu"
                  onClick={() => addToCart(donut, navigate)}
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

export default DonutMenu;
