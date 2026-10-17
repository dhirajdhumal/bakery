import React from "react";

const Orders = () => {
  const loginUser = JSON.parse(localStorage.getItem("LoggedInUser"));

  const allOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

  const userOrders = allOrders.filter(
    (order) => order.userEmail === loginUser.email,
  );

  return (
    <>
      {loginUser ? (
        <>
          <h1>Your Orders</h1>
          {userOrders.length === 0 && <h2>No Orders Found</h2>}
          <div className="order-container">
            {userOrders.map((order, index) => (
              <>
                <h1>OrderNo: {userOrders.length - index}</h1>
                {order.items.map((item, itemIndex) => (
                  <div className="order-item">
                    <div key={itemIndex} className="">
                      <h3></h3>
                      <h4>
                        {itemIndex + 1} Product Name: {item.title}
                      </h4>
                      <p>Price: {item.price}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </>
            ))}
          </div>
        </>
      ) : (
        <h1>Please Login to view your Orders</h1>
      )}
    </>
  );
};

export default Orders;
