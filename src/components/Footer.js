import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <img className="logo-img" src="../images/logo-coloured.jpg" alt="logo" />
                            <h2 className="brand f-brand">hemu.</h2>
                            <p className="footer-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditates assumenda, veritatis nobis iste exercitationem.</p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h2 className="brand">Featured</h2>
                            <ul className="featured">
                                <li>Laptops</li>
                                <li>Watches</li>
                                <li>Fashion</li>
                                <li>Shoes</li>
                                <li>New Arrivals</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h2 className="brand">Contact us</h2>
                            <ul className="contactus">
                                <li>
                                    <h3>Address</h3>
                                    <p>59, Baker Street, London.</p>
                                </li>
                                <li>
                                     <h3>Email</h3>
                                     <p>hemusonar01@gmail.com</p>
                                </li>
                                <li>
                                    <h3>Phone</h3>
                                    <p>+022 235689</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3 instagram">
                            <h2 className="brand">Instagram</h2>
                            <div className="row img-box">
                                <div className="col-6 col-lg-4 col-md-4"><img src="../images/instagram/insta1.jpg" alt="instagram" /></div>
                                <div className="col-6 col-lg-4 col-md-4"><img src="../images/instagram/insta2.jfif" alt="instagram" /></div>
                                <div className="col-6 col-lg-4 col-md-4"><img src="../images/instagram/insta3.jpg" alt="instagram" /></div>
                                <div className="col-6 col-lg-4 col-md-4"><img src="../images/instagram/insta4.jfif" alt="instagram" /></div>
                                <div className="col-6 col-lg-4 col-md-4"><img src="../images/instagram/insta5.jpg" alt="instagram" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-12 col-lg-3">
                            <img src="../images/instagram/card1.jpg" alt="card" />
                            <img src="../images/instagram/card2.jpg" alt="card" />
                            <img src="../images/instagram/card3.png" alt="card" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <p className="copy">hemu eCommerce &copy; 2021, All rights reserved.</p>
                        </div>
                        <div className="col-12 col-lg-3 social-media">
                            <div className="media"><i className="fab fa-facebook-f"></i></div>
                            <div className="media"><i className="fab fa-twitter"></i></div>
                            <div className="media"><i className="fab fa-instagram"></i></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
