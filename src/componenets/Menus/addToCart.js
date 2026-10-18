import { toast } from "react-toastify";

export function addToCart(item, navigate) {
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = existingCartItems.find(
    (existingCartItem) => existingCartItem.title === item.title,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    existingCartItems.push({
      ...item,
      quantity: 1, 
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  toast.success(`${item.title} added to cart!`);
  // setTimeout(()=>{
  navigate("/cart");
  // },3000)
}
