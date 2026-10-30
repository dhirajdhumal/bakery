import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ToastContainer } from "react-toastify";
import CartItemProvider from "./contextapi/CartItemContext.jsx";
import AuthProvider from "./contextapi/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <CartItemProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CartItemProvider>

    <ToastContainer position="top-center" autoClose={1500} />
  </>,
);
