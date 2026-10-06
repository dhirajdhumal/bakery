import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { categories, featuredProducts } from '../../data/data'
import './Home.css';
import {Link} from 'react-router-dom';
import { whyChooseUs } from '../../data/homePage';

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const loggedInSuccess = localStorage.getItem("LoggedInSuccess");
    if(loggedInSuccess === "true"){ 
      toast.success("Login Successful!");
      localStorage.removeItem("LoggedInSuccess");
    }
  },[])


  return (
    <>
      <div className="text-center d-flex flex-column justify-content-center align-items-center background-img">
        <h1 className='fw-bold fs-2'>WELCOME TO BAKERY CAKERY</h1>
        <h2 className='text-shadow'>Freshly Baked, Made With Love ❤️</h2>

        <p> Delicious cakes, pastries and sweet treats
            made fresh with love for every occasion.
        </p>

        <button className='btn fw-bold text-white px-4 py-2' style={{backgroundColor: "rgb(205, 146, 72)"}} onClick={()=>navigate('/products')}>Explore More</button>
      </div>


      {/* Categories Section */}
      <section className='container-fluid categories-section'> 
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="fw-bold headingColor">Explore Our Categories</h2>
          <p className="text-muted">Discover something delicious for every occasion.</p>
        </div>

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-sm-4 gap-3">
          {
            categories.map((category)=>(
              <div className="category-cards card shadow border-0" key={category.img}>
                <img className='card-img-top' src={category.img} alt={category.title} width={"100%"}/>
                <div className="card-body">
                  <Link to={category.link} className='text-decoration-none'>
                  <h4 className='card-title category-title text-center fw-bold'>{category.title}</h4>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>

      </section>

      {/* Featured Products Section */}
      <section className='container-fluid featured-section'>
          <div className="container d-flex flex-column justify-content-center align-items-center mt-3">
            <h2 className='headingColor fw-bold'>Our Featured Products</h2>
            <p className='text-muted'>Delicious favorites freshly baked for you.</p>
          </div>

          <div className="d-flex flex-row flex-sm-wrap flex-wrap justify-content-center align-items-center gap-sm-4 gap-3">
            {
              featuredProducts.map((products)=>(
                <div className="card featured-cards shadow border-0" key={products.img}>
                  <img className='card-img-top rounded' src={products.img} alt={products.title} />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className='featured-title fw-bold'>{products.title}</h5>
                    <p className='featured-title fw-bold'>₹{products.price}</p>
                    <button className='btn add-to-cart'>Add to Cart</button>
                  </div>
                </div>
              ))
            }
          </div>
      </section>

      {/* Custom cake Section */}
      <section className='container-fluid custom-cake-section mt-sm-5 mt-4 mb-sm-5 mb-4 pb-sm-1 pb-0'>
            <div className="container custom-cake-container mx-auto mt-sm-3 mt-0 rounded row p-3">
                <div className="col-lg-8  col-12 custom-left">
                  <h2 className='headingColor fw-bold'>Your Cake, Your Way🎂</h2>
                  <p className="fw-bold">
                      Don't settle for an ordinary cake when you can create
                      something truly special.
                  </p>

                  <p className='text-muted'>
                      At Bakery Cakery, you can customize your cake according
                      to your own needs. Choose your flavor, size, shape,
                      colors, theme and decorations, or simply share a
                      reference image with us.
                  </p>

                  <p className='text-muted'>
                      Whether it's a birthday, anniversary, wedding or any
                      special occasion, we'll turn your idea into a cake
                      made especially for you.
                  </p>

                  <button className='add-to-cart py-2 px-3'>Customize Your Cake</button>
                </div>
                <div className="col-lg-4 col-12 d-none d-sm-flex justify-content-center align-items-center">
                  <div className="custom-right d-flex justify-content-center shadow">
                    <i className='custom-right-icon bi bi-cake d-flex justify-content-center align-items-center'></i>
                  </div>
                </div>
            </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='container-fluid why-choose-us mb-5 p-2'>
            <div className="container d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className='headingColor fw-bold mt-4'>Why Choose Us</h2>
              <p className='text-muted'>We belive great teste starts with quality ingredients and a lot of Love.</p>
            </div>

            <div className="d-flex flex-wrap justify-content-center between align-items-center gap-sm-5 gap-4 p-3 mx-sm-5 wcu-container">
              {
                whyChooseUs.map((wcu)=>(
                  <div className="card text-center border-0 shadow p-2 wcu">
                    <h1 className='p-4 wcu-icon'>{wcu.icon}</h1>
                    <h5 className='headingColor fw-bold wcu-title'>{wcu.title}</h5>
                    <p className='text-muted wcu-desc'>{wcu.desc}</p>
                  </div>
                ))
              }
            </div>
      </section>

      {/* Offer Section */}
      <div className="container-fluid">
        <div className="container home-cake-offer-container rounded">
              <div className="offer-data d-flex flex-column col-4 text-center">
                <p className='offer-data-1'>🎉 SPECIAL OFFER</p>
                <p className='offer-data-2'>Make Every Celebration Sweeter!</p>
                <p className='offer-data-3'>Enjoy delicious cakes and desserts made fresh with love.</p>
                <p className='offer-data-4'>Get 20% OFF</p>
                <p className='offer-data-5'>On selected cakes and desserts.</p>
                <button className='offer-data-6'>View Menu</button>
              </div>
        </div>
      </div>

    </>
  )
}

export default Home