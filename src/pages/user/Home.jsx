import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { categories, featuredProducts } from '../../data/data'
import './Home.css';
import {Link} from 'react-router-dom';

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
        <div className="container d-flex flex-column justify-content-center align-items-center text-center mt-3">
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
      <section className='container-fluid custom-cake-section mt-sm-5 mt-2 mb-sm-5 mb-2 pb-sm-1 pb-0'>
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

      <div className="bg-dark">dhirjnd</div>
    </>
  )
}

export default Home


