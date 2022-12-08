import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <>
          <section className="hero-section container">
            <div className="row d-flex align-items-center">
              <div className="hero-text col-12 col-lg-6">
                <p className="main-hero-para">We provide</p>
                <h1 className="heading"><span className="heading-design">Best Price </span>This Year</h1>
                <p className="main-hero-para">Lorem ipsum dolor sit elit. Quia laborum voluptate qui, illo<br />explicabo expedita cupiditate enim!</p>
                <Link to="/" className="btn-main">Shop now</Link>
              </div>
              <div className="col-lg-6">
                <img src="../images/hero.png" alt="hero img" className="hero-img" />
              </div>
            </div> 
          </section>
          <section id="products" className="partners-products container">
            <h1 className="title">Our Products</h1>
            <div className="partners-logo-products products row">
              <div className="category col-12 col-md-6">
                <img src="../images/laptops/laptop0.jpg" alt="products" className="partner-product" />
                <h2 className="category-tag">laptops</h2>
                <Link to="/Laptops" className="btn-sub">View</Link>
              </div>
              <div className="category col-12 col-md-6">
                <img src="../images/watches/watch1.jpg" alt="products" className="partner-product" />
                <h2 className="category-tag">Watch</h2>
                <Link to="/Watch" className="btn-sub">View</Link>
              </div>
              <div className="category col-12 col-md-6">
                <img src="../images/fashion/shirt1.jpg" alt="products" className="partner-product" />
                <h2 className="category-tag">Fashion</h2>
                <Link to="/Fashion" className="btn-sub">View</Link>
              </div>
              <div className="category col-12 col-md-6">
                <img src="../images/shoes/shoe1.jpg" alt="products" className="partner-product" />
                <h2 className="category-tag">Shoes</h2>
                <Link to="/Shoes" className="btn-sub">View</Link>
              </div>
            </div>
          </section> 
          <section className="partners-products partners container">
            <h1 className="title">Our Partners</h1>
            <div className="partners-logo-products row">
              <img src="../images/partners/asus.png" alt="partners" className="partner-product company-logo col-6" />
              <img src="../images/partners/fastrack.png" alt="partners" className="partner-product company-logo col-6" />
              <img src="../images/partners/nike.png" alt="partners" className="partner-product company-logo col-6" />
              <img src="../images/partners/puma.png" alt="partners" className="partner-product company-logo col-6" />
            </div>
          </section> 
        </>
    )
}

export default Home;
