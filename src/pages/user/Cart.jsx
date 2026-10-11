import React from 'react'
import './Cart.css'

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <>
  
      <table className="container m-5" style={{backgroundColor: "#fff5ea"}}>
        <thead className='text-center' style={{backgroundColor: "#f5dfc5"}}>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </thead>
        <tbody className='text-center'>
          {
            cartItems.map((cartItems)=>(
              <tr className='table-row'>
                <td><img src={cartItems.img} className='rounded' alt="" height={"40px"} width={'45px'}/> {cartItems.title} </td>
                <td>{cartItems.price}</td>
                <td>{cartItems.quantity}</td>
                <td>{Number(cartItems.price) * cartItems.quantity}</td>
                <td> <button className='border-0 rounded add-to-cart'>Remove</button> </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default Cart
