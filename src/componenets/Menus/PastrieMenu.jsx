import React from "react";
import { addToCart } from "./addToCart";
import { pastries } from "../../data/products";
import { useNavigate } from "react-router-dom";

const PastrieMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="cake-headings" id="pastries">
      <h3 className="text-center headingColor fw-bold">Pastries</h3>
      <hr className="line" />

      <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
        {pastries.map((pastrie) => (
          <div className="card shadow border-0 cake-card">
            <img
              className="card-img-top"
              src={pastrie.img}
              alt=""
              height={"250px"}
              width={"100%"}
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-center p-1">
              <h4 className="card-title fw-bold headingColor">
                {pastrie.title}
              </h4>
              <p className="text-muted text-center item-desc">{pastrie.desc}</p>
              <p className="fw-bold headingColor fs-5 item-price">
                ₹{pastrie.price}
              </p>
              <button
                className="btn add-to-cart-menu"
                onClick={() => addToCart(pastrie, navigate)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastrieMenu;
