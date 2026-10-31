import "./Cart.css";
import "./Home.css";
import { useState } from "react";
import{toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartItemContext } from "../../contextapi/CartItemContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    clearCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartItemContext);

  const totalAmount = cartItems.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);

  function checkout(){
    const loginUser = JSON.parse(localStorage.getItem('LoggedInUser'));

    if(!loginUser){
      toast.success("Please Login to place an Order");
      return;
    }

    if(!loginUser.address || !loginUser.phone){
      toast.success("Please add your address and phone number to place an Order");
      return;
    }

    const existingItems = JSON.parse(localStorage.getItem('orderItems')) || []

    const newOrder = {
      orderId: Date.now(),
      userName: loginUser.name,
      userEmail: loginUser.email,
      userAddress: loginUser.address,
      userMobile: loginUser.phone,
      items: cartItems,
      orderDate: new Date().toISOString()
    }

    const allItems = [newOrder, ...existingItems];
    localStorage.setItem("orderItems", JSON.stringify(allItems));
    toast.success("Order Placed Successfully");
    clearCart();
    navigate('/orders');
  }

  return (
    <>
      <div className="cart-container container my-3">
        <button className="btn add-to-cart my-2 text-center" onClick={clearCart}>
          Clear Cart
        </button>
        <table className="mx-auto table m-3">
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
          <tbody className="cart-items-body text-center headingColor">
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center fw-bold fs-3 empty-cart"
                    style={{ marginTop: "20px", height: "382px" }}
                  >
                    <h2 className="headingColor fw-bold">Your cart is empty</h2>
                    <button className="btn add-to-cart" onClick={() => navigate('/products')}>
                      Explore Menu
                    </button>
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
          <tfoot className="text-center table-footer" style={{ backgroundColor: "#f5dfc5" }}>
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