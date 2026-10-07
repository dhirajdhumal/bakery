import React from 'react'
import './Products.css';

const Products = () => {
  return (
    <>
      <section className='m-4'>
        <div className="container-fluid product-header-container d-flex flex-column p-3 align-items-center rounded" style={{backgroundColor: "#fff5ea"}}>
          <h1 className='fw-bold headingColor display-4 menu-hero-header'>Our Sweet Menu</h1>
          <p className='text-muted text-center fs-5 menu-hero-desc'>Freshly backed favorite for every craving.</p>
          <div className="menus m-3 d-flex flex-wrap gap-lg-4 gap-2">
            <button className='menus-item-button headingColor' style={{backgroundColor: "rgb(65, 46, 22)", color: "White"}}>All</button>
            <button className='menus-item-button headingColor'>Cakes</button>
            <button className='menus-item-button headingColor'>Pastries</button>
            <button className='menus-item-button headingColor'>Donuts</button>
            <button className='menus-item-button headingColor'>Cookies</button>
            <button className='menus-item-button headingColor'>Brownies</button>
            <button className='menus-item-button headingColor'>Breads</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
