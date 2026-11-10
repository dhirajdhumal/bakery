import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentTimer = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/cart");
      toast.warning("Payment time expired. Please try again.");
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
      <>
        <h6 className="text-danger fw-bold">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </h6>
      </>
    </div>
  );
};

export default PaymentTimer;
