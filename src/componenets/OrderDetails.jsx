import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./OrderDetails.css";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

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

  const downloadInvoice = () => {
    if (!orderDetails) {
      toast.error("Order details not found!");
      return;
    }

    const doc = new jsPDF();

    // Page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();

    // Colors
  
    const headingColor = [92, 55, 35];
    const textColor = [60, 60, 60];

    // Background color for the first page


    // Invoice heading
    doc.setTextColor(...headingColor);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("INVOICE", 20, 25);

    // Order information
    doc.setFontSize(11);
    doc.setTextColor(...textColor);

    doc.text(`Order ID: ${orderDetails.orderId}`, 20, 40);

    doc.text(`Customer Name: ${orderDetails.userName || "Customer"}`, 20, 46);

    doc.text(`Customer Email: ${orderDetails.userEmail || "Email"}`, 20, 52);

    doc.text(`Customer Address: ${orderDetails.userAddress || "Address"}`, 20, 58);

    doc.text(`Customer Mobile: ${orderDetails.userMobile || "Mobile"}`, 20, 64);




    doc.text(
      `Order Date: ${new Date(orderDetails.orderDate).toLocaleDateString("en-IN")}`,
      20,
      70,
    );

    // Table data generated dynamically from order items
    const tableRows = orderDetails.items.map((item, index) => [
      index + 1,
      item.title,
      `Rs. ${Number(item.price).toFixed(2)}`,
      item.quantity,
      `Rs. ${(Number(item.price) * Number(item.quantity)).toFixed(2)}`,
    ]);

    // Calculate subtotal
    const subtotal = orderDetails.items.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0,
    );

    const deliveryFee = 50;
    const grandTotal = subtotal + deliveryFee;

    // Items table
    autoTable(doc, {
      startY: 80,

      head: [["#", "Item", "Price", "Quantity", "Total"]],

      body: tableRows,

      theme: "grid",

      headStyles: {
        fillColor: headingColor,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },

      styles: {
        font: "helvetica",
        fontSize: 10,
        cellPadding: 4,
        textColor: textColor,
        overflow: "linebreak",
      },

      columnStyles: {
        0: { cellWidth: 12 },
        1: { cellWidth: "auto" },
        2: { cellWidth: 30 },
        3: { cellWidth: 23 },
        4: { cellWidth: 32 },
      },

      margin: {
        left: 20,
        right: 20,
        bottom: 20,
      },

      didDrawPage: () => {
        // Apply the background to every generated page.
        // Draw it behind the existing content.
        const pageNumber = doc.internal.getCurrentPageInfo().pageNumber;

        // Backgrounds for additional pages are handled below
        // by the page-background helper after table generation.
      },
    });

    // Get the ending position of the table
    let finalY = doc.lastAutoTable.finalY + 12;

    // Add summary, moving it to a new page if necessary
    const pageHeight = doc.internal.pageSize.getHeight();

    if (finalY + 35 > pageHeight - 15) {
      doc.addPage();
      finalY = 25;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...textColor);

    doc.text(`Subtotal: Rs. ${subtotal.toFixed(2)}`, 130, finalY);

    doc.text(`Delivery Fee: Rs. ${deliveryFee.toFixed(2)}`, 130, finalY + 8);

    doc.setDrawColor(...headingColor);
    doc.line(125, finalY + 12, pageWidth - 20, finalY + 12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...headingColor);

    doc.text(`Grand Total: Rs. ${grandTotal.toFixed(2)}`, 130, finalY + 22);

    // Save the PDF
    doc.save(`Invoice-${orderDetails.orderId}.pdf`);

    toast.success("Invoice downloaded successfully!");
  };

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
        <div className="row align-items-start g-4">
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
                  onClick={downloadInvoice}
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
