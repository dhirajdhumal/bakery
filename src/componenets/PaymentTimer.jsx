import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentTimer = () => {
    const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300);

  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      navigate('/cart');
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center mt-3">
      {!expired ? (
        <>
          <h6 className="text-danger fw-bold">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h6>
        </>
      ) : (
        <div className="alert alert-danger">
          Payment session expired! Please try again.
        </div>
      )}
    </div>
  );
};

export default PaymentTimer;
