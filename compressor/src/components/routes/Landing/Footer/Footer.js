// src/components/routes/Landing/Footer/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <footer class="text-center text-lg-start bg-body-tertiary text-muted">
                
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    
                    <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                    
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Company name
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 class="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <Link to="/products/air"  onClick={scrollToTop} className="dropdown-item" >Air Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/gas" onClick={scrollToTop} className="dropdown-item" >Gas Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/oil-free"  onClick={scrollToTop} class="dropdown-item">Oil-Free Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/oil-lubricated" onClick={scrollToTop} class="dropdown-item">Oil-Lubricated Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/rotary"  onClick={scrollToTop} class="dropdown-item">Rotary Screw Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/portable"  onClick={scrollToTop} class="dropdown-item">Portable Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/diesel"  onClick={scrollToTop} class="dropdown-item">Diesel-Driven Compressors</Link>
                        </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 class="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" class="dropdown-item">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" class="dropdown-item">Settings</a>
                        </p>
                        <p>
                            <a href="#!" class="dropdown-item">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="dropdown-item">Help</a>
                        </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                    </div>
                </section>

                
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    Copyright © 2024. All Rights Reserved by  
                    <a className="text-reset fw-bold" href="https://www.snylloair.com/index.html"> Snyllo Innovations Pvt. Ltd.</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
