import React from "react";
import { brownies } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartItemContext } from "../../contextapi/CartItemContext";

const BrownieMenu = () => {
  const navigate = useNavigate();
  const {addToCart} = useContext(CartItemContext);
  return (
    <>
      <div className="cake-headings" id="brownies">
        <h3 className="text-center headingColor fw-bold">Brownies</h3>
        <hr className="line" />

        <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
          {brownies.map((brownie) => (
            <div
              className="card shadow border-0 cake-card cake-card-2"
              style={{ height: "472px" }}
            >
              <img
                className="card-img-top"
                src={brownie.img}
                alt=""
                height={"250px"}
                width={"100%"}
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title fw-bold headingColor cake-card-2-title">
                  {brownie.title}
                </h5>
                <p className="text-muted text-center item-desc">
                  {brownie.desc}
                </p>
                <p className="fw-bold headingColor fs-5 item-price">
                  ₹{brownie.price}
                </p>
                <button
                  className="btn add-to-cart-menu"
                  onClick={() => addToCart(brownie, navigate)}
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

export default BrownieMenu;
