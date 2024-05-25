// src/components/routes/Landing/Tenth/Tenth.js


import React from 'react';
import './Tenth.css';

const Tenth = () => {
    return (
        <div>
            <section className='cont-snyllo'>

                <div className='cont-snyllo-container'>

                    <div className='cont-snyllo-left'>
                        <img
                            src="./uploads/contact-machine.png"
                            className="img-fluid contact-machine"
                            alt="contact-machine"
                        />
                    </div>

                    <div className='cont-snyllo-right'>
                        
                    <h1 className='cont-snyllo-heading'>Contact SNYLLOAIR Compressors</h1>
                        <div className='cont-snyllo-body'>
                            <div className='cont-snyllo-para'>
                                If you want to learn more about ourr industrial air compressor
                                products, we provide efficient and affordable air compressors as
                                well as other industrial products to companies around the globe.
                                Find out what makes SnylloAir a  leading industrial compressor
                                company by reaching out to us today.
                                
                            </div>
                            <div>
                            <a href="#" class="btn btns position-relative  start-10 btn-conta">CONTACT US</a>
                            </div>
                            
                            <a href="#" className="card-link livin linkinnn">Contact Us About Financing </a>
                            
                        </div>
                        
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Tenth;