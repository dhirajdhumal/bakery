import React from "react";
import "./Order.css";

const Orders = () => {
  const loginUser = JSON.parse(localStorage.getItem("LoggedInUser"));

  const allOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

  const userOrders = loginUser
    ? allOrders.filter((order) => order.userEmail === loginUser.email)
    : [];

  return (
    <>
      <div className="container mt-5 mb-5">
        <h3 className="headingColor fw-bold">
          Your Orders ({userOrders.length})
        </h3>
        {userOrders.length === 0 && <h2>No Orders Found</h2>}
        <div className="">
          {userOrders.map((order, index) => (
            <div className="order-container shadow p-4 mb-4 rounded">
              {/* <h1>OrderNo: {userOrders.length - index}</h1> */}
              <div className="order-item">
                <div className="row gap-4 gap-lg-0">
                  <div className="col-lg-2 border-end">
                    <div
                      className="rounded p-2"
                      style={{
                        backgroundColor: "#eee8e293",
                        height: "145px",
                        width: "160px",
                      }}
                    >
                      <p className="text-muted m-0 ms-2">Order ID</p>
                      <p className="fw-bold m-0 headingColor ms-2">
                        #{order.orderId}
                      </p>
                      <div className="order-date-time mt-1 ms-2 d-flex">
                        <i className="bi bi-calendar3 headingColor"></i>
                        <div className="data-time ms-2">
                          <p className="text-muted m-0 ">Order Date</p>
                          <p className="m-0 fw-bold headingColor fs-5">
                            {new Date(order.orderDate).toLocaleDateString(
                              "en-US",
                            )}
                          </p>
                          <p className="m-0 text-muted">
                            {new Date(order.orderDate).toLocaleTimeString(
                              "en-US",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 scrollbar-hide"
                    style={{
                      overflowX: "auto",
                      display: "flex",
                      flexWrap: "nowrap",
                      gap: "35px",
                    }}
                  >
                    {order.items.map((item, itemIndex) => (
                      <>
                        <div className="item" key={itemIndex}>
                          <img
                            className="rounded"
                            src={item.img}
                            alt=""
                            height={"85px"}
                            width={"100px"}
                          />
                          <p
                            className="item-name fw-bold m-0"
                            style={{ width: "100px" }}
                          >
                            {item.title}
                          </p>
                          <p className="item-quantity fw-bold m-0">
                            <span className="text-muted">Qty: </span>
                            {item.quantity}
                          </p>
                        </div>
                      </>
                    ))}
                    {/* {order.items.length > 3 && (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center px-2 rounded text-center ms-4"
                          style={{
                            backgroundColor: "#eeb47c93",
                            height: "87px",
                            width: "100px",
                            marginRight: "15px",
                          }}
                        >
                          <p className="mb-1 fw-bold headingColor">
                            +{order.items.length - 3}
                          </p>
                          <p className="text-muted mb-0 item-name fw-bold">
                            More Items
                          </p>
                        </div>
                      )} */}
                  </div>
                  <div className="col-lg-5 d-flex align-items-center justify-content-center border-start">
                    <div className="total me-3">
                      <p className="text-muted m-0">Total Amount</p>

                      <p className="fw-bold headingColor fs-5 m-0">
                        ₹
                        {order.items.reduce(
                          (total, item) =>
                            (total += item.price * item.quantity),
                          0,
                        )}
                      </p>
                    </div>
                    <div className="buttons d-flex  gap-2">
                      <button
                        className="rounded view-details fw-bold p-2 headingColor"
                        style={{
                          backgroundColor: "white",
                          border: "1px solid #531b1b",
                        }}
                      >
                        View Details
                      </button>
                      <button className="track-order border-0 rounded p-2">
                        <i className="bi bi-truck"></i> Track Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
