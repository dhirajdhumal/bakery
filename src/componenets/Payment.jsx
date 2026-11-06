import React, { useContext, useState } from "react";
import { CartItemContext } from "../contextapi/CartItemContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../pages/user/Home";
import PaymentQR from "./PaymentQR";
import PaymentTimer from "./PaymentTimer.jsx";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartItemContext);

  const [paymentMode, setPaymentMode] = useState("");
  const [onlineMethod, setOnlineMethod] = useState("QR");

  const total = cartItems.reduce((sum, price) => {
    return (sum += price.quantity * price.price);
  }, 0);

  console.log(total);

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
      <section
        className="payment-container d-flex justify-content-center align-items-center m-5"
        style={{ height: "545px" }}
      >
        <div className="model-info p-2 rounded">
          <div className="payment-option d-flex gap-3 ">
            <h3 className="headingColor fw-bold">
              {!paymentMode ? "Payment methods" : "Payment method"}
            </h3>
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
          <hr className="m-0 mt-2 mb-2" />
          <form onSubmit={doPayment}>
            {paymentMode === "Online-Payment" ? (
              <>
                <div>
                  <h4 className="fw-bold headingColor">Choose Online Mode</h4>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
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
                    </div>
                    {
                      onlineMethod === "QR" ? <PaymentTimer /> : ""
                    }
                    {
                      onlineMethod === "UPI" ? <PaymentTimer /> : ""
                    }
                    {
                      onlineMethod === "Bank" ? <PaymentTimer /> : ""
                    }
                    
                  </div>

                  {onlineMethod === "QR" && (
                    <div>
                      <h5 className="m-0 mt-2 fw-bold headingColor">
                        Pay &#8377;{total + 50} Via QR
                      </h5>
                      <h5 className="m-0 mb-2">
                        (<b>&#8377;{total} +</b> Delivery Charges:{" "}
                        <b>&#8377;50</b>)
                      </h5>

                      <div className="ms-5 fw-bold">
                        <PaymentQR />
                      </div>
                      <p className="mt-2 headingColor m-0">
                        Scan using Google Pay, PhonePe, Or another UPI app.
                      </p>
                    </div>
                  )}

                  {onlineMethod === "UPI" && (
                    <div>
                      <h5 className="m-0 mt-2 fw-bold headingColor">
                        Pay &#8377;{total + 50} Via UPI
                      </h5>
                      <h5 className="m-0 mb-2">
                        (<b>&#8377;{total} +</b> Delivery Charges:{" "}
                        <b>&#8377;50</b>)
                      </h5>
                    </div>
                  )}
                  {onlineMethod !== "QR" ? (
                    <button type="submit" className="add-to-cart">
                      Do-Payment
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
            {paymentMode === "cashOnDelivery" ? (
              <button type="submit" className="add-to-cart ms-3">
                Procced to Order
              </button>
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
