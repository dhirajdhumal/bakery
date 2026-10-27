import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./OrderDetails.css";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const allOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

  const orderDetails = allOrders.find(
    (order) => String(order.orderId) === String(orderId),
  );

  const total = orderDetails.items.reduce((sum, items) => {
    return (sum += items.quantity * items.price);
  }, 0);

  if (!orderDetails) {
    return (
      <section>
        <h2 className="mt- ms-5">Order Not Found</h2>
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
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="headingColor fw-bold ms-5 mt-3">Order Details</h1>
          <h5 className="headingColor fw-bold ms-5">Order #{orderId}</h5>
          <h6 className="text-muted ms-5">
            Placed on{" "}
            {new Date(orderDetails.orderDate).toLocaleDateString("en-US")} at{" "}
            {new Date(orderDetails.orderDate).toLocaleTimeString("en-US")}
          </h6>
        </div>
        <button
          className="add-to-cart me-5 mt-3 p-2"
          type="button"
          onClick={() => navigate("/orders")}
        >
          Close details
        </button>
      </div>
      <div className="container order-items mt-3 mb-5">
        <div className="row align-items-start g-4" >
          <div className="col-lg-8 col-12 mx-lg-0  shadow p-0 rounded order-items">
            <div className="model-info rounded d-flex justify-content-between">
              <h3 className=" m-0 p-2  fw-bold headingColor">
                <i className="bi bi-bag"></i> Order Items
              </h3>
              <h5 className="fw-bold text-muted m-0 mt-1 p-2">
                {orderDetails.items.length}{" "}
                {orderDetails.items.length > 1 ? "items" : "item"}
              </h5>
            </div>
            <div className="table-responsive px-4">
              <table className="table m-0">
                <thead className="text-center">
                  <tr>
                    <th className="text-secondary">
                      {orderDetails.items.length > 1 ? "Items" : "Item"}
                    </th>
                    <th className="text-secondary">Price</th>
                    <th className="text-secondary">Quanity</th>
                    <th className="text-secondary">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.items.map((items) => (
                    <tr style={{ verticalAlign: "middle" }}>
                      <td className="d-flex align-items-center">
                        <img
                          className="rounded"
                          src={items.img}
                          alt=""
                          width={"100px"}
                          height={"70px"}
                        />
                        <div className="ms-4 d-flex flex-column ">
                          <h5 className="fw-bold headingColor m-0">
                            {items.title}
                          </h5>
                          <p
                            className="m-0 text-muted"
                            style={{ width: "270px" }}
                          >
                            {items.desc}
                          </p>
                        </div>
                      </td>
                      <td className="text-center">
                        <p className="m-0">&#8377; {items.price}</p>
                      </td>
                      <td className="text-center fw-bold">
                        <p
                          className="m-0 model-info rounded p-2 mx-3"
                          style={{ border: "1px solid #f5eae0" }}
                        >
                          {items.quantity}
                        </p>
                      </td>
                      <td className="text-center fw-bold">
                        &#8377; {items.price * items.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="shadow  rounded order-summery">
              <h3 className="model-info rounded m-0 p-2 fw-bold headingColor">
                <i className="bi bi-file-text me-1"></i>Order Summary
              </h3>
              <div className="px-4 pt-2 pb-2">
                <div className="d-flex justify-content-between">
                  <p className="text-muted m-0">
                    Subtotal ({orderDetails.items.length}{" "}
                    {orderDetails.items.length > 1 ? "items" : "item"})
                  </p>
                  <p className="fw-bold m-0">&#8377; {total}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="text-muted m-0">Delivery Fee</p>
                  <p className="fw-bold m-0">&#8377; 50</p>
                </div>
                <hr className="m-1" />
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="headingColor fw-bold">Total Amount</h5>
                  <h5 className="headingColor fw-bold">&#8377; {total + 50}</h5>
                </div>

                <div
                  className="p-2 rounded "
                  style={{ backgroundColor: "#eaf4ea" }}
                >
                  <div className="d-flex justify-content-between">
                    <p className="headingColor fw-bold">
                      <i className="bi bi-credit-card me-2"></i>Payment Status
                    </p>
                    <p
                      className="px-2 rounded fw-bold paid"
                      style={{ backgroundColor: "#b3f0b3", maxWidth: "68px" }}
                    >
                      <i className="bi bi-check-circle-fill me-1"></i>Paid
                    </p>
                  </div>

                  <div>
                    <p className="headingColor m-0 fw-bold">
                      <i className="bi bi-qr-code-scan me-2"></i>Payment Method
                    </p>
                    <p className="text-muted ms-4 m-0">Paid via UPI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 shadow rounded order-summery">
              <h3 className="model-info rounded m-0 p-2 fw-bold headingColor">
                <i className="bi bi-gear-fill me-1 ms-3"></i>Actions
              </h3>
              <div className="p-4">
                <button
                  className="w-100 p-2 rounded add-to-cart mb-3"
                  type="button"
                  onClick={() => toast.info("Feature Coming Soon!")}
                >
                  <i className="bi bi-download me-2"></i>Download Invoice
                </button>
                <button
                  className="w-100 p-2 rounded model-info headingColor fw-bold"
                  type="button"
                  onClick={() => navigate("/orders")}
                  style={{ border: "1px solid #edb285" }}
                >
                  <i className="bi bi-arrow-left me-1"></i>Back to Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
