import React from 'react'
import './Cart.css'

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <>
  
      <table className="container m-5 mx-auto" style={{backgroundColor: "#fff5ea"}}>
        <thead className='text-center fs-4 headingColor' style={{backgroundColor: "#f5dfc5"}}>
          <th>Product</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </thead>
        <tbody className='text-center headingColor'>
          {
            cartItems.map((cartItems)=>(
              <tr className='table-row'>
                <td className='py-2'><img src={cartItems.img} className='rounded' alt="" height={"45px"} width={'50px'}/></td>
                <td>{cartItems.title}</td>
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
