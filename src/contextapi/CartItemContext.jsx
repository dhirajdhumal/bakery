import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const CartItemContext = createContext();

export default function CartItemProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );

  function addToCart(item, navigate) {
    const existingItem = cartItems.find(
      (existingCartItem) => existingCartItem.title === item.title,
    );

    let updatedCartItems;
    if (existingItem) {
        updatedCartItems = cartItems.map((existingCartItem) => {
            if (existingCartItem.title === item.title) {
                return { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
            }
            return existingCartItem;
        });
    } else {
      updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setCartItems(updatedCartItems);
    toast.success(`${item.title} added to cart!`);
    // setTimeout(()=>{
    navigate("/cart");
    // },3000)
  }

  const removeItemFromCart = (cartItem) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.filter(
      (item) => item.title !== cartItem.title,
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (cartItem) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === cartItem.title) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (cartItem) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.map((item) => {
      if (item.title === cartItem.title && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <CartItemContext
      value={{
        cartItems,
        addToCart,
        clearCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartItemContext>
  );
}
