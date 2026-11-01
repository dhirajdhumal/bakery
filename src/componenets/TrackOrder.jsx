import React from "react";
import { useParams } from "react-router-dom";
import "./TrackOrder.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contextapi/AuthContext";


const TrackOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const statusRef = useRef();
  const [allOrders, setAllOrders] = useState(
    JSON.parse(localStorage.getItem("orderItems")) || [],
  );

  const orderDetails = allOrders.find(
    (order) => String(order.orderId) === String(orderId),
  );

  // Admin Function to change the status of the order
  function changeStatus(e) {
    e.preventDefault();
    console.log("Status changed");

    const updatedStatus = {
      ...orderDetails,
      orderStatus: statusRef.current.value,
    };

    const updatedOrders = allOrders.map((orders) => {
      if (orders.userEmail === orderDetails.userEmail) {
        return updatedStatus;
      }
      return orders;
    });

    localStorage.setItem("orderItems", JSON.stringify(updatedOrders));
    setAllOrders(updatedOrders);
  }

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
    {user ? (
      <section className="trac-order m-3">
        <div className="ms-lg-5 d-flex justify-content-between align-items-center tracking-header">
          <div>
            <h1 className="fw-bold headingColor">Tracking Details</h1>
            <h5 className="fw-bold headingColor">Order #{orderId}</h5>
          </div>

          {/* Admin Zone */}
          <div className="d-flex align-items-center p-3" style={{ border: "2px solid #edb285", borderRadius: "5px" }}>
            <select
              className="p-2 model-info"
              name=""
              id=""
              defaultValue="Placed"
              ref={statusRef}
              style={{ border: "2px solid #edb285" }}
            >
              <option value="Placed">Placed</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Preparing">Preparing</option>
              <option value="ReadyToPickup">Ready to Pickup</option>
              <option value="Delivered">Delivered</option>
            </select>
            <button
              className="ms-2 add-to-cart mt-0 p-2"
              type="button"
              onClick={changeStatus}
            >
              Change Status
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="add-to-cart me-lg-5 p-2"
              type="button"
              onClick={() => navigate("/orders")}
            >
              Close details
            </button>
          </div>
        </div>

        <div className="status-container m-5">
          <div
            className="d-flex model-info status-container rounded justify-content-center  text-center align-items-center"
            style={{ height: "63vh" }}
          >
            <div className="mt-3 mt-lg-0 parent">
              {orderDetails.orderStatus === "Placed" ||
              orderDetails.orderStatus === "Confirmed" ||
              orderDetails.orderStatus === "Preparing" ||
              orderDetails.orderStatus === "ReadyToPickup" ||
              orderDetails.orderStatus === "Delivered" ? (
                <h1 className="headingColor fw-bold m-0">
                  <i class="bi bi-check-circle-fill"></i>
                </h1>
              ) : (
                <h1 className="fw-bold m-0 icon-off">
                  <i class="bi bi-x-circle-fill"></i>
                </h1>
              )}
              <h4 className="headingColor fw-bold m-0">Order Placed</h4>
              <p className="track-order-desc-1 track-order-desc">
                {new Date(orderDetails.orderDate).toLocaleDateString("en-US")}{" "}
                {new Date(orderDetails.orderDate).toLocaleTimeString("en-US")}
              </p>
            </div>
            {orderDetails.orderStatus === "Placed" ||
            orderDetails.orderStatus === "Confirmed" ||
            orderDetails.orderStatus === "Preparing" ||
            orderDetails.orderStatus === "ReadyToPickup" ||
            orderDetails.orderStatus === "Delivered" ? (
              <h1 className="track-line">&#x00BB;</h1>
            ) : (
              <h1 className="track-line-off"></h1>
            )}

            <div className="parent">
              {orderDetails.orderStatus === "Confirmed" ||
              orderDetails.orderStatus === "Preparing" ||
              orderDetails.orderStatus === "ReadyToPickup" ||
              orderDetails.orderStatus === "Delivered" ? (
                <>
                  <h1 className="headingColor fw-bold m-0">
                    <i class="bi bi-check-circle-fill"></i>
                  </h1>
                  <h4 className="headingColor fw-bold m-0">Confirmed</h4>
                  <p className="track-order-desc">Your order is confirmed</p>
                </>
              ) : (
                <>
                  <h1 className="fw-bold m-0 icon-off">
                    <i class="bi bi-x-circle-fill"></i>
                  </h1>
                  <h4 className="icon-off fw-bold m-0">Confirmed</h4>
                  <p className="track-order-desc-off">
                    Your order is confirmed
                  </p>
                </>
              )}
            </div>
            {orderDetails.orderStatus === "Confirmed" ||
            orderDetails.orderStatus === "Preparing" ||
            orderDetails.orderStatus === "ReadyToPickup" ||
            orderDetails.orderStatus === "Delivered" ? (
              <h1 className="track-line">&#x00BB;</h1>
            ) : (
              <h1 className="track-line-off"></h1>
            )}

            <div className="parent">
              {orderDetails.orderStatus === "Preparing" ||
              orderDetails.orderStatus === "ReadyToPickup" ||
              orderDetails.orderStatus === "Delivered" ? (
                <>
                  <h1 className="headingColor fw-bold m-0">
                    <i class="bi bi-check-circle-fill"></i>
                  </h1>
                  <h4 className="headingColor fw-bold m-0">Preparing</h4>
                  <p className="track-order-desc">
                    We are preparing your items
                  </p>
                </>
              ) : (
                <>
                  <h1 className="fw-bold m-0 icon-off">
                    <i class="bi bi-x-circle-fill"></i>
                  </h1>
                  <h4 className="icon-off fw-bold m-0">Preparing</h4>
                  <p className="track-order-desc-off">
                    We are preparing your items
                  </p>
                </>
              )}
            </div>
            {orderDetails.orderStatus === "Preparing" ||
            orderDetails.orderStatus === "ReadyToPickup" ||
            orderDetails.orderStatus === "Delivered" ? (
              <h1 className="track-line">&#x00BB;</h1>
            ) : (
              <h1 className="track-line-off"></h1>
            )}

            <div className="parent">
              {orderDetails.orderStatus === "ReadyToPickup" ||
              orderDetails.orderStatus === "Delivered" ? (
                <>
                  <h1 className="headingColor fw-bold m-0">
                    <i class="bi bi-check-circle-fill"></i>
                  </h1>
                  <h4 className="headingColor fw-bold m-0">Ready to Pickup</h4>
                  <p className="track-order-desc ms-lg-4">
                    Your order is ready for pickup
                  </p>
                </>
              ) : (
                <>
                  <h1 className="fw-bold m-0 icon-off">
                    <i class="bi bi-x-circle-fill"></i>
                  </h1>
                  <h4 className="icon-off fw-bold m-0">Ready to Pickup</h4>
                  <p className="track-order-desc-off ms-4">
                    Your order is ready for pickup
                  </p>
                </>
              )}
            </div>
            {orderDetails.orderStatus === "ReadyToPickup" ||
            orderDetails.orderStatus === "Delivered" ? (
              <h1 className="track-line">&#x00BB;</h1>
            ) : (
              <h1 className="track-line-off"></h1>
            )}

            <div className="mb-3 mb-lg-0 parent">
              {orderDetails.orderStatus === "Delivered" ? (
                <>
                  <h1 className="headingColor fw-bold m-0">
                    <i class="bi bi-check-circle-fill"></i>
                  </h1>
                  <h4 className="headingColor fw-bold m-0">Delivered</h4>
                  <p className="track-order-desc">Enjoy your treats!</p>
                </>
              ) : (
                <>
                  <h1 className="fw-bold m-0 icon-off">
                    <i class="bi bi-x-circle-fill"></i>
                  </h1>
                  <h4 className="icon-off fw-bold m-0">Delivered</h4>
                  <p className="track-order-desc-off">Enjoy your treats!</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
        ) : (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "92vh" }}>
          <h2 className="headingColor fw-bold">Please log in to Track Order.</h2>
          <button
            className="add-to-cart p-2"
            type="button"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default TrackOrder;
