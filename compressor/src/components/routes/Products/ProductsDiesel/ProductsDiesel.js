// src/components/routes/Products/ProductsDiesel/ProductsDiesel.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsDiesel.css';

const ProductsDiesel = () =>{
    return(
        <div>
            <Header />

            <section  className="products-diesel">
                <div className='pro-oil-free-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-diesel" 
                    alt="Pro-main-bg-diesel" 
                    />
                </div>
                <div className='container pro-diesel-content'>
                    <h1 className='pro-diesel-heading'>Diesel-Driven Compressors</h1>
                    <p className='pro-diesel-subheading'>
                    Diesel-driven compressors are gas compressors powered by diesel engines 
                    rather than electric motors. They are designed for applications where a 
                    reliable source of compressed air is needed in remote locations, 
                    construction sites, or areas without access to electricity.
                    </p>
                </div>

            </section>

            {/* **************** */}

            <section className="diesel-types">
                <h2 className="types-heading" >Types of Diesel-Driven Compressors</h2>
                
                <h5 className="types-types"><strong>Reciprocating (Piston) Diesel  Compressors: </strong> These compressors use reciprocating pistons driven by a diesel engine to compress gas. They are available in various configurations, including single-stage and two-stage compressors, depending on the required pressure levels.</h5>  
                <h5 className="types-types"><strong>Rotary Screw Diesel  Compressors:</strong> Rotary screw diesel compressors utilize a diesel engine to drive the rotary screw mechanism, which compresses the gas. They are known for their high efficiency, reliability, and continuous operation capabilities.</h5>  
                
            </section>

            {/* *************** */}

            <section className="diesel-applications">
                <h2 className="applications-heading" >Applications of Portable Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/diesel2.jpg"
                                class="card-img-top air-p" 
                                alt="diesel2"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Mining Operations</strong></h5>
                                <p class="card-text">In mining operations, diesel-driven compressors are used for various tasks such as rock drilling, ventilation, and pneumatic transportation of materials in underground mines or remote locations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/diesel3.jpg" 
                                class="card-img-top air-p" 
                                alt="diesel3"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Oil and Gas Industry</strong></h5>
                                <p class="card-text">Diesel compressors play a crucial role in the oil and gas industry for gas compression, well drilling, and pneumatic operations in remote drilling sites or offshore platforms where electricity supply may be limited.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/diesel4.png" 
                                class="card-img-top air-p" 
                                alt="diesel4"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Agriculture</strong></h5>
                                <p class="card-text">They are used in agricultural applications for tasks such as operating pneumatic tools, powering irrigation systems, and providing compressed air for grain handling and storage facilities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/diesel5.jpg" 
                                class="card-img-top air-p" 
                                alt="diesel5"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Emergency Services</strong></h5>
                                <p class="card-text">Diesel-driven compressors are utilized by emergency services such as fire departments and rescue teams for powering pneumatic tools during rescue operations, firefighting, and emergency response activities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/diesel1.jpg" 
                                class="card-img-top air-p" 
                                alt="diesel1"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Construction Sites</strong></h5>
                                <p class="card-text">Diesel-driven compressors are commonly used in construction sites for powering pneumatic tools, including jackhammers, drills, and impact wrenches. They provide a reliable source of compressed air without requiring access to electricity.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

            </section>

            {/* ******** */}

            <section className="portable-benefits">
                <h2 className="benefits-heading" >Benefits of Diesel-Driven Compressors</h2>
                <h5 className="types-types">
                    <strong>Portability:</strong> Diesel-driven compressors are portable and self-contained units, making them suitable for use in remote locations or areas without access to electricity.
                </h5>
                <h5 className="types-types">
                    <strong>Reliability:</strong> Diesel engines are known for their reliability and robustness, ensuring consistent performance even in harsh environments or extreme weather conditions.
                </h5> 
                <h5 className="types-types">
                    <strong>Independence from Electricity:</strong> Diesel compressors provide a reliable source of compressed air without relying on electricity, making them suitable for use in off-grid locations or during power outages.
                </h5> 
                <h5 className="types-types">
                    <strong>High Power Output:</strong> Diesel engines typically generate higher power outputs compared to electric motors, allowing diesel-driven compressors to handle heavy-duty applications and high-demand tasks effectively.
                </h5>  
                <h5 className="types-types">
                    <strong>Versatility:</strong>They can be used for a wide range of applications, including construction, mining, agriculture, and emergency services, offering versatility and flexibility in various industries.
                </h5>
            </section>



            <Footer />
            </div>
    );
};

export default ProductsDiesel;