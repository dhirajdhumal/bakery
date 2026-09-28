import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories'
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

        <div className="d-flex flex-row flex-wrap  justify-content-center align-items-center gap-sm-4 gap-3">
          {
            categories.map((category)=>(
              <div className="category-cards card border-0" key={category.img}>
                <img className='card-img-top' src={category.img} alt="" width={"100%"}/>
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
    </>
  )
}

export default Home


