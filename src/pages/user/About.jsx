import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content container">
          <p className="about-eyebrow">BAKED FRESH DAILY</p>
          <h1>A little joy<br />in every bite.</h1>
          <p>
            Cakes, pastries, and sweet moments made especially for you.
          </p>
          <div className="about-hero-actions">
            <Link to="/products" className="about-button">Shop Our Treats</Link>
            <Link to="/gallery" className="about-hero-link">View gallery <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="about-story container">
        <div className="about-story-image">
          <img src="/images/Bakery Logo.png" alt="Bakery Cakery logo" />
          <div className="about-story-badge">
            <strong>Since</strong>
            <span>2020</span>
          </div>
        </div>
        <div className="about-story-content">
          <p className="about-eyebrow">A TASTE OF HOME</p>
          <h2>We bake memories, not just desserts.</h2>
          <p>
            Bakery Cakery began with a love for warm ovens, family recipes, and
            the happiness that comes from sharing something delicious. Today,
            that same feeling goes into every order we prepare.
          </p>
          <p>
            From everyday cravings to once-in-a-lifetime celebrations, our
            cakes and bakes are made fresh, finished by hand, and served with
            a generous slice of joy.
          </p>
          <div className="about-promise">
            <span>✓</span>
            <p>Fresh ingredients, thoughtful details, and no shortcuts.</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-section-heading">
            <p className="about-eyebrow">WHY BAKERY CAKERY</p>
            <h2>Good ingredients. Great feelings.</h2>
            <p>Everything we do is guided by the little things that make a big difference.</p>
          </div>
          <div className="about-value-grid">
            <article className="about-value-card">
              <i className="bi bi-basket2-fill"></i>
              <h3>Freshly baked</h3>
              <p>Our cakes, breads, and pastries are baked fresh so every bite tastes its best.</p>
            </article>
            <article className="about-value-card">
              <i className="bi bi-palette-fill"></i>
              <h3>Made your way</h3>
              <p>Choose your flavours, designs, and details for a cake made especially for your occasion.</p>
            </article>
            <article className="about-value-card">
              <i className="bi bi-emoji-smile-fill"></i>
              <h3>Made for moments</h3>
              <p>From everyday treats to special celebrations, we add something sweet to every moment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-stats container">
        <div><strong>1500+</strong><span>Sweet creations</span></div>
        <div><strong>6+</strong><span>Years of baking</span></div>
        <div><strong>100%</strong><span>Made with love</span></div>
      </section>

      <section className="about-cta">
        <div>
          <p className="about-eyebrow">YOUR NEXT SWEET MOMENT</p>
          <h2>Made fresh for your kind of celebration.</h2>
          <Link to="/products" className="about-button about-button-light">Find Your Favourite</Link>
        </div>
      </section>
    </main>
  );
};

export default About;