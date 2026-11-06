import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useContext } from "react";
import { CartItemContext } from "../contextapi/CartItemContext";

const PaymentQR = () => {
  const { cartItems } = useContext(CartItemContext);
  const upiId = "9421900341@slc";
  const name = "Bakery Cakery";
  const amount = cartItems.reduce((sum, price) => {
    return (sum += price.quantity * price.price);
  }, 50);

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  return(
    <>
        <div>
            <h4 className="fw-bold headingColor m-0">Scan to pay</h4>
            <p className="">Amount: ₹{amount}</p>

            <QRCodeSVG
                value={upiLink}
                size={150}
                level="H"
            />
        </div>
        
    </>
  );
};

export default PaymentQR;
