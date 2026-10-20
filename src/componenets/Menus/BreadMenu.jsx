import React from "react";
import { breads } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartItemContext } from "../../contextapi/CartItemContext";

const BreadMenu = () => {
  const navigate = useNavigate();
  const {addToCart} = useContext(CartItemContext);
  return (
    <>
      <div className="cake-headings" id="breads">
        <h3 className="text-center headingColor fw-bold">Breads</h3>
        <hr className="line" />

        <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
          {breads.map((bread) => (
            <div
              className="card shadow border-0 cake-card cake-card-2"
              style={{ height: "472px" }}
            >
              <img
                className="card-img-top"
                src={bread.img}
                alt=""
                height={"100%"}
                width={"100%"}
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h4 className="card-title fw-bold headingColor">
                  {bread.title}
                </h4>
                <p className="text-muted text-center item-desc">{bread.desc}</p>
                <p className="fw-bold headingColor fs-5 item-price">
                  ₹{bread.price}
                </p>
                <button
                  className="btn add-to-cart-menu"
                  onClick={() => addToCart(bread, navigate)}
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

export default BreadMenu;
