// src/components/routes/Products/ProductsScrew/ProductsScrew.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsScrew.css';

const ProductsScrew = () =>{
    return(
        <div>

            <Header />
            <section  className="products-screw">
                <div className='pro-screw-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-screw" 
                    alt="Pro-main-bg-screw" 
                    />
                </div>
                <div className='container pro-screw-content'>
                    <h1 className='pro-screw-heading'>Rotary Screw  Compressors</h1>
                    <p className='pro-screw-subheading'>
                    Rotary screw compressors utilize a pair of helical rotors or screws to 
                    compress gas. As the rotors turn, air is drawn into the compressor and 
                    trapped between the screw threads. The compression occurs as the air moves 
                    along the length of the rotors, decreasing in volume and increasing in 
                    pressure until it exits the compressor.
                    </p>
                </div>

            </section>

            {/* ********** */}

            <section className="screw-types">
                <h2 className="types-heading" >Types of Rotary Screw Compressors</h2>
                <h5 className="types-types">
                  <li className="types-t-t"><strong>Oil-Injected Rotary Screw Compressors: </strong> These compressors use pistons driven by a crankshaft to compress gas. They require lubricating oil for the piston rings, cylinder walls, and other moving parts.</li>  
                  <li className="types-t-t"><strong>Oil-Free Rotary Screw  Compressors: </strong> Oil-free rotary screw compressors do not require lubricating oil in the compression chamber. They use alternative methods, such as specialized coatings or water injection, to seal the rotors and maintain cooling.</li>  
                </h5>
            </section>

            {/* *************** */}

            <section className="screw-applications">
                <h2 className="applications-heading" >Applications of Rotary Screw Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/induss1.jpg" 
                                class="card-img-top air-p" 
                                alt="induss1"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Industrial Manufacturing</strong></h5>
                                <p class="card-text">Rotary screw compressors are widely used in industrial manufacturing for powering pneumatic tools, operating machinery, and providing compressed air for various processes such as pneumatic conveying and packaging.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/auto1.jpg" 
                                class="card-img-top air-p" 
                                alt="auto1"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Automotive Industry</strong></h5>
                                <p class="card-text">Rotary screw compressors are used in automotive manufacturing for various applications such as painting, welding, and assembly line operations, where compressed air is required.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/hvac1.jpg" 
                                class="card-img-top air-p" 
                                alt="hvac1"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>HVAC Systems</strong></h5>
                                <p class="card-text">They are employed in heating, ventilation, and air conditioning (HVAC) systems for providing compressed air for temperature control, refrigeration, and ventilation purposes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/mining.jpg" 
                                class="card-img-top air-p" 
                                alt="mining"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Mining and Quarrying</strong></h5>
                                <p class="card-text">Rotary screw compressors are used in mining and quarrying operations for powering pneumatic drills, pumps, and other equipment required for excavation and material handling.</p>
                            </div>
                        </div>
                    </div>
                    
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/cons1.jpg"
                                class="card-img-top air-p" 
                                alt="cons1"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Construction</strong></h5>
                                <p class="card-text">They are commonly used in construction sites for powering pneumatic tools like jackhammers, drills, and sandblasters, as well as for operating machinery such as air compressors for abrasive blasting.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* ******** */}

            <section className="screw-benefits">
                <h2 className="benefits-heading" >Benefits of Rotary Screw Compressors</h2>
                <h5 className="types-types">
                    <strong>Continuous Operation:</strong> Rotary screw compressors can operate continuously without the need for frequent start-stop cycles, making them suitable for applications requiring a steady supply of compressed air.
                </h5>
                <h5 className="types-types">
                    <strong>High Efficiency:</strong> They are known for their high efficiency, providing a reliable and consistent source of compressed air with minimal energy consumption.
                </h5> 
                <h5 className="types-types">
                    <strong>Compact Design:</strong> Rotary screw compressors have a compact and space-saving design, making them suitable for installation in confined or tight spaces.
                </h5> 
                <h5 className="types-types">
                    <strong>Low Noise Levels:</strong> Compared to reciprocating compressors, rotary screw compressors typically produce lower noise levels during operation, contributing to a quieter working environment.
                </h5>  
                <h5 className="types-types">
                    <strong>Easy Maintenance:</strong> Rotary screw compressors generally have fewer moving parts and require less maintenance compared to reciprocating compressors, resulting in reduced downtime and maintenance costs.
                </h5>
            </section>

            <Footer />
        </div>
    );
};

export default ProductsScrew;