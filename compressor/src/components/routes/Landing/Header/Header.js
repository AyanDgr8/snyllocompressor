// src/components/routes/Landing/Header/Header.js

// Import necessary components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <nav className="navbar headerr navbar-expand-lg bg-body">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="/uploads/compressor-logo.png"
                            alt="compressor-logo"
                            className="compressor-logo"
                            onClick={scrollToTop}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMobileMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={closeMobileMenu}>
                            <li className="nav-item dropdown">
                            {/* <button
                                    className="nav-link btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    aria-expanded="false"
                                >
                                    PRODUCTS
                                </button> */}
                                <Link to="/products" className="nav-link dropdown-toggle" onClick={scrollToTop} 
                                    id="dropdownMenuButton"
                                    type="button"
                                    aria-expanded="false">PRODUCTS</Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link to="/products/air" className="dropdown-item" onClick={scrollToTop}>Air Compressors</Link></li>
                                    <li><Link to="/products/gas" className="dropdown-item" onClick={scrollToTop}>Gas Compressors</Link></li>
                                    <li><Link to="/products/rotary" className="dropdown-item" onClick={scrollToTop}>Rotary Screw Compressors</Link></li>
                                    <li><Link to="/products/oil-free" className="dropdown-item" onClick={scrollToTop}>Oil-Free Compressors</Link></li>
                                    <li><Link to="/products/oil-lubricated" className="dropdown-item" onClick={scrollToTop}>Oil-Lubricated Compressors</Link></li>
                                    <li><Link to="/products/portable" className="dropdown-item" onClick={scrollToTop}>Portable Compressors</Link></li>
                                    <li><Link to="/products/diesel" className="dropdown-item" onClick={scrollToTop}>Diesel-Driven Compressors</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/industry" className="nav-link" onClick={scrollToTop}>INDUSTRY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/company" className="nav-link" onClick={scrollToTop}>COMPANY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link" onClick={scrollToTop}>SERVICES</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/technology" className="nav-link dropdown-toggle" onClick={scrollToTop}>TECHNOLOGY</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/oxygen/sports" className="dropdown-item" onClick={scrollToTop}>Sports</Link></li>
                                    <li><Link to="/oxygen/wellness" className="dropdown-item" onClick={scrollToTop}>Beauty & Wellness</Link></li>
                                    <li><Link to="/oxygen/anti-aging" className="dropdown-item" onClick={scrollToTop}>Anti-aging</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/partners" className="nav-link" onClick={scrollToTop}>PARTNERS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;





// *******************