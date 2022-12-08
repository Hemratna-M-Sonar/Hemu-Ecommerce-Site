import React from 'react';
import {Link} from "react-router-dom";
// import logo from "../images/logo.jpg";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav-shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo-img" src="../images/logo.jpg" alt="logo" />
                        <span className="brand">hemu.</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link items" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="/Laptops">Laptops</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="/Watch">Watches</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="/Fashion">Fashion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="/Shoes">Shoes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="/Contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="#"><i className="fas fa-search fontawesome-style"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link items" to="#"><i className="fas fa-shopping-cart fontawesome-style"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
