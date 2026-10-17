import React, { useEffect } from "react";
import "./Cart.css";
import "./Home.css";
import { useState } from "react";
import{toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

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

  const totalAmount = cartItems.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);

  function checkout(){
    const existingItems = JSON.parse(localStorage.getItem('orderItems')) || []
    const allItems = [[...cartItems], ...existingItems];
    localStorage.setItem("orderItems", JSON.stringify(allItems));
    toast.success("Order Placed Successfully");
    localStorage.removeItem("cartItems");
    navigate('/orders');
  }

  return (
    <>
      <div className="cart-container container my-5">
        <table className="mx-auto table">
          <thead
            className="text-center fs-4 headingColor table-heading"
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
                  <div
                    className="d-flex align-items-center justify-content-center fw-bold fs-3"
                    style={{ marginTop: "20px", height: "420px" }}
                  >
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
                  <td className="product-title" style={{ fontWeight: "bold" }}>
                    {cartItems.title}
                  </td>
                  <td>{cartItems.price}</td>
                  <td>
                    <button
                      className="btn add-to-cart mx-2 px-3 minus-btn"
                      onClick={() => {
                        decreaseQuantity(cartItems);
                      }}
                    >
                      -
                    </button>
                    {cartItems.quantity}
                    <button
                      className="btn add-to-cart mx-2 px-3 plus-btn"
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
          <tfoot className="text-center" style={{ backgroundColor: "#f5dfc5" }}>
            <td></td>
            <td className="text-center fs-4 headingColor fw-bold">
              Total Amount
            </td>
            <td></td>
            <td></td>
            <td className="headingColor fw-bold">{totalAmount}</td>
            <td className="text-center">
              <button className="text-decoration-none btn add-to-cart my-2" onClick={checkout}>
                Checkout
              </button>
            </td>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;