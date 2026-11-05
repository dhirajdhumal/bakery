import React, { useContext, useState } from "react";
import { CartItemContext } from "../contextapi/CartItemContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartItemContext);

  const [paymentMode, setPaymentMode] = useState("");
  const [onlineMethod, setOnlineMethod] = useState("UPI");

  function doPayment(e) {
    e.preventDefault();
    success();
  }

  function success() {
    if (!paymentMode) {
      toast.warning("Please select a payment method");
      return;
    }

    if (!cartItems || cartItems.length === 0) {
      toast.warning("Your cart is empty");
      navigate("/cart");
      return;
    }

    const loginUser = JSON.parse(localStorage.getItem("LoggedInUser"));

    if (!loginUser) {
      toast.warning("Please login first");
      navigate("/login");
      return;
    }

    const existingItems = JSON.parse(localStorage.getItem("orderItems")) || [];

    const isCOD = paymentMode === "cashOnDelivery";

    const newOrder = {
      orderId: Date.now(),
      userName: loginUser.name,
      userEmail: loginUser.email,
      userAddress: loginUser.address,
      userMobile: loginUser.phone,
      items: cartItems,
      orderDate: new Date().toISOString(),

      paymentMode: isCOD
        ? "Cash on Delivery"
        : `Online Payment - ${onlineMethod}`,

      paymentStatus: isCOD ? "Pending" : "Paid",
      orderStatus: "Placed",
    };

    const allItems = [newOrder, ...existingItems];

    localStorage.setItem("orderItems", JSON.stringify(allItems));

    toast.success("Order placed successfully");

    clearCart();

    navigate("/orders");
  }

  return (
    <>
      <section className="payment-container d-flex justify-content-center align-items-center m-5">
        <div className="">
          <div className="payment-option d-flex gap-3">
            <h3 className="headingColor fw-bold">Payment Methods:</h3>
            {paymentMode === "Online-Payment" || paymentMode === "" ? (
              <button
                type="button"
                className="add-to-cart"
                onClick={() => setPaymentMode("Online-Payment")}
              >
                Online Payment
              </button>
            ) : (
              ""
            )}
            {paymentMode === "cashOnDelivery" || paymentMode === "" ? (
              <button
                type="button"
                className="add-to-cart"
                onClick={() => setPaymentMode("cashOnDelivery")}
              >
                Cash On Delivery
              </button>
            ) : (
              ""
            )}
          </div>
          <form onSubmit={doPayment}>
            {paymentMode === "Online-Payment" ? (
              <>
                <div>
                  <h4>Choose Online Mode</h4>

                  <select
                    name="onlineMethod"
                    id="onlineMethod"
                    value={onlineMethod}
                    onChange={(e) => setOnlineMethod(e.target.value)}
                  >
                    <option value="QR">Via QR</option>
                    <option value="UPI">Via UPI</option>
                    <option value="Bank">Via Bank</option>
                  </select>

                  <button type="submit">Do-Payment</button>
                </div>
              </>
            ) : (
              <></>
            )}
            {paymentMode === "cashOnDelivery" ? (
              <button type="submit">Procced to Order</button>
            ) : (
              ""
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;
