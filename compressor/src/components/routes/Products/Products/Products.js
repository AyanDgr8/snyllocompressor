// src/components/routes/Products/Products/Products.js

import React from 'react';
import { Link } from 'react-router-dom';
import Header from  '../../Landing/Header/Header';
import Footer  from '../../Landing/Footer/Footer';
import './Products.css';

const Products =() =>{
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return(
        <div>
            <Header />
            <section className="products-main">
                <div className='pro-main-bg'>
                    <img 
                    src="./uploads/contact-machinee.png"
                    class="img-fluid bg-pro" 
                    alt="Pro-main-bg" 
                    />
                </div>
                <div className='container pro-content'>
                    <h1 className='pro-heading'>SnylloAir COMPRESSORS</h1>
                    <p className='pro-subheading'>
                        Where Power Meets Efficiency! Say goodbye to energy wastage and hello to unparalleled performance. 
                        Our compressors redefine efficiency, seamlessly blending cutting-edge technology with eco-conscious design. 
                        Engineered to minimize energy consumption without compromising power, SnylloAir Compressors are the epitome 
                        of sustainability in action. 
                    </p>
                </div>
            </section>

            {/* *************** */}

            <section className='pro-cards'>
                <div class="row row-cols-1 row-cols-md-2 g-7">
                    <div class="col">
                        <Link to="/products/air" onClick={scrollToTop}>
                            <div class="card pro-cardss">
                                <img 
                                src="./uploads/airing.png"
                                class="img-fluid card-pro" 
                                alt="airing" 
                                />

                                <div class="card-body">
                                    <h5 class="card-title pro-title">Air compressors</h5>
                                    <p class="card-text pro-para">
                                    Air compressors are mechanical devices that convert power into potential energy stored in compressed air. They are widely used in various industries and applications for generating compressed air, which can be utilized for powering pneumatic tools, operating machinery, providing ventilation. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                            
                    </div>

                    <div class="col">
                        <Link to="/products/oil-free" onClick={scrollToTop}>
                            <div class="card  pro-cardss">
                                <img 
                                src="./uploads/oiling.png"
                                class="img-fluid card-pro" 
                                alt="oiling" 
                                />
                                <div class="card-body">
                                    <h5 class="card-title pro-title">Oil-free compressors</h5>
                                    <p class="card-text pro-para">
                                    Oil-free compressors, as the name suggests, are compressors that operate without the use of oil in the compression chamber. These compressors are designed to produce clean, oil-free compressed air, making them suitable for applications where oil contamination is undesirable. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col">
                    <Link to="/products/oil-lubricated" onClick={scrollToTop}>
                            <div class="card  pro-cardss">
                                <img 
                                src="./uploads/oilfreeing.png"
                                class="img-fluid card-pro" 
                                alt="oilfreeing" 
                                />

                                <div class="card-body">
                                    <h5 class="card-title pro-title">Oil-lubricated  compressors</h5>
                                    <p class="card-text pro-para">
                                    Oil-lubricated compressors are a type of gas compressor that uses oil for lubrication and sealing purposes within the compression chamber. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col">
                        <Link to="/products/rotary" onClick={scrollToTop}>
                            <div class="card  pro-cardss">
                                <img 
                                src="./uploads/screwing.png"
                                class="img-fluid card-pro" 
                                alt="screwing" 
                                />
                                <div class="card-body">
                                    <h5 class="card-title pro-title">Rotary Screw  compressors</h5>
                                    <p class="card-text pro-para">
                                    Rotary screw compressors are a type of gas compressor that uses two intermeshing helical screws to compress gas. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col">
                        <Link to="/products/portable" onClick={scrollToTop}>
                            <div class="card  pro-cardss">
                                <img 
                                src="./uploads/gasing.png"
                                class="img-fluid card-pro" 
                                alt="dieseling" 
                                />
                                <div class="card-body">
                                    <h5 class="card-title pro-title">Portable  compressors</h5>
                                    <p class="card-text pro-para">
                                    Portable compressors are compact and lightweight gas compressors designed for easy transportation and mobility. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col">
                        <Link to="/products/diesel" onClick={scrollToTop}>
                            <div class="card  pro-cardss">
                                <img 
                                    src="./uploads/heating.png"
                                    class="img-fluid card-pro" 
                                    alt="heating" 
                                />
                                <div class="card-body">
                                    <h5 class="card-title pro-title">Diesel-driven compressors</h5>
                                    <p class="card-text pro-para">
                                    Diesel-driven compressors are a type of portable compressor that utilizes diesel engines as their power source. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col">
                        <Link to="/products/gas" onClick={scrollToTop}>
                            <div class="card pro-cardss">
                                <img 
                                    src="./uploads/dieseling.png"
                                    class="img-fluid card-pro" 
                                    alt="gasing" 
                                />
                                <div class="card-body">
                                    <h5 class="card-title pro-title">Gas compressors</h5>
                                    <p class="card-text pro-para">
                                    Gas compressors are mechanical devices designed to increase the pressure of a gas by reducing its volume. They are crucial in various industries for handling gases efficiently. 
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Products;