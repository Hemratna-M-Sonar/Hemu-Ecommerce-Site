import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="contact-us">
                    <h1 className="contact-heading">Contact Us</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt fontawesome-style"></i>
                            <p>59, Baker Street, London.</p>
                        </li>
                        <li>
                            <i className="fas fa-envelope-square fontawesome-style"></i>
                            <p>hemaratnasonar01@gmail.com</p>
                        </li>
                        <li>
                            <i className="fas fa-user-alt fontawesome-style"></i>
                            <p>Hemaratna Sonar</p>
                        </li>
                        <li>
                            <i className="fas fa-phone fontawesome-style"></i>
                            <p>+022 235689</p>
                        </li>
                    </ul>
                    <div className="icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="get-in-touch">
                <div className="left">
                    <h1 className="contact-heading">Get In Touch</h1>     
                    <p className="sub-heading">Feel free to drop us a line below !</p>
                    <form className="form">
                        <input className="input" type="text" placeholder="Enter your name"/>
                        <input className="input" type="email" placeholder="Enter your Email"/>
                        <textarea cols="20" rows="5" className="textarea" placeholder="Enter something here"></textarea>
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </div>
                </div>
            </div> 
        </>
    )
}

export default Contact;
