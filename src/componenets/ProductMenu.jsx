import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartItemContext } from "../contextapi/CartItemContext";

const ProductMenu = ({title, product}) => {
  const navigate = useNavigate();
  const {addToCart} = useContext(CartItemContext);
  return (
    <>
      <div className="cake-headings" >
        <h3 className="text-center headingColor fw-bold">{title}</h3>
        <hr className="line" />

        <div className="cake-menu d-flex justify-content-center align-items-center flex-wrap gap-4">
          {product.map((cake) => (
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
                    ₹{cake.price}
                  </p>
                  <button
                    className="btn add-to-cart-menu"
                    onClick={() => addToCart(cake, navigate)}
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

export default ProductMenu;