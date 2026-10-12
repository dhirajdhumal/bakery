import React from "react";
import "./Cart.css";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );

  const removeItemFromCart = (cartItem) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.filter(
      (item) => item.title !== cartItem.title,
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (cartItem) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === cartItem.title) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (cartItem) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === cartItem.title && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <table
        className="container m-5 mx-auto"
        style={{ backgroundColor: "#fff5ea" }}
      >
        <thead
          className="text-center fs-4 headingColor"
          style={{ backgroundColor: "#f5dfc5" }}
        >
          <th>Product</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </thead>
        <tbody className="text-center headingColor">
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={6}>
                <div className="d-flex align-items-center justify-content-center fw-bold fs-3" style={{marginTop: "20px", height: "480px"}}>
                  Your cart is empty
                </div>
              </td>
            </tr>
          ) : (
            cartItems.map((cartItems) => (
              <tr className="table-row">
                <td className="py-2">
                  <img
                    src={cartItems.img}
                    className="rounded"
                    alt=""
                    height={"45px"}
                    width={"50px"}
                  />
                </td>
                <td>{cartItems.title}</td>
                <td>{cartItems.price}</td>
                <td>
                  <button
                    className="btn add-to-cart mx-2"
                    onClick={() => {
                      decreaseQuantity(cartItems);
                    }}
                  >
                    -
                  </button>
                  {cartItems.quantity}
                  <button
                    className="btn add-to-cart mx-2"
                    onClick={() => {
                      increaseQuantity(cartItems);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>{Number(cartItems.price) * cartItems.quantity}</td>
                <td>
                  {" "}
                  <button
                    className="border-0 rounded add-to-cart"
                    onClick={() => removeItemFromCart(cartItems)}
                  >
                    Remove
                  </button>{" "}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
