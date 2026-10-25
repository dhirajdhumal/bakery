import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const allOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

  const orderDetails = allOrders.find(
    (order) => String(order.orderId) === String(orderId),
  );

  if (!orderDetails) {
    return (
      <section>
        <h2 className="mt-5 ms-5">Order Not Found</h2>
        <button
          className="ms-5 mb-5 p-2 add-to-cart"
          type="button"
          onClick={() => navigate("/orders")}
        >
          Back to Orders
        </button>
      </section>
    );
  }
  return (
    <>
      <h1 className="headingColor fw-bold ms-5 mt-5">Order Details</h1>
      <h5 className="headingColor fw-bold ms-5">Order #{orderId}</h5>
      <h6 className="text-muted ms-5">
        Placed on {new Date(orderDetails.orderDate).toLocaleDateString("en-US")}{" "}
        at {new Date(orderDetails.orderDate).toLocaleTimeString("en-US")}
      </h6>
      <div className="container order-items mt-5 mb-5">
        <div className="row gap-5">
          <div className="col-8">
            Order Items       
          </div>
          <div className="col-3 ms-5">Order Summary</div>
        </div>
      </div>
      <button
        className="add-to-cart p-2 ms-5 mb-5"
        type="button"
        onClick={() => navigate("/orders")}
      >
        Close details
      </button>
    </>
  );
};

export default OrderDetails;
