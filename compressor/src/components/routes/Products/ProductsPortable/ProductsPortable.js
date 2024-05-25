// src/components/routes/Products/ProductsPortable/ProductsPortable.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsPortable.css';

const ProductsPortable = () =>{
    return(
        <div>
            <Header />

            <section  className="products-portable">
                <div className='pro-oil-free-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-oil-free" 
                    alt="Pro-main-bg-portable" 
                    />
                </div>
                <div className='container pro-portable-content'>
                    <h1 className='pro-portable-heading'>Portable  Compressors</h1>
                    <p className='pro-portable-subheading'>
                    Portable compressors are gas compressors that are small and 
                    lightweight enough to be easily moved from one location to 
                    another. They are typically mounted on wheels or carried by 
                    handles, allowing for convenient transportation to various 
                    job sites or work areas where compressed air is needed.
                    </p>
                </div>

            </section>

            {/* **************** */}

            <section className="portable-types">
                <h2 className="types-heading" >Types of Portable Compressors</h2>
                <h5 className="types-types">
                  <li className="types-t-t"><strong>Reciprocating (Piston) Portable Compressors: </strong> These compressors are often smaller in size and can be powered by electric motors or gasoline/diesel engines. They are suitable for applications requiring moderate to high pressures and intermittent usage.</li>  
                  <li className="types-t-t"><strong>Rotary Screw Portable Compressors:</strong> Portable rotary screw compressors are compact units with built-in components such as the compressor, motor, and air receiver. They are commonly used in construction, mining, and agriculture for providing a continuous supply of compressed air.</li>  
                  <li className="types-t-t"><strong>Portable Inflators: </strong>These are small, handheld compressors primarily used for inflating tires, sports equipment, inflatable toys, and other items requiring low-pressure air.</li>  
                </h5>
            </section>

            {/* *************** */}

            <section className="portable-applications">
                <h2 className="applications-heading" >Applications of Portable Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/cons2.jpg" 
                                class="card-img-top air-p" 
                                alt="cons2"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Construction Sites</strong></h5>
                                <p class="card-text">Portable compressors are commonly used in construction sites for powering pneumatic tools like nail guns, jackhammers, drills, and sandblasters.</p>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/auto22.jpg"
                                class="card-img-top air-p" 
                                alt="auto22"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Automotive Maintenance</strong></h5>
                                <p class="card-text">They are used for inflating tires, operating pneumatic impact wrenches, and other automotive repair and maintenance tasks.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/agri22.jpg" 
                                class="card-img-top air-p" 
                                alt="agri22"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Remote Work Sites</strong></h5>
                                <p class="card-text">Portable compressors are ideal for remote work sites or locations without access to stationary compressed air systems, such as in agriculture, mining, and forestry operations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/diy22.jpg" 
                                class="card-img-top air-p" 
                                alt="diy22"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>DIY/Home Use</strong></h5>
                                <p class="card-text">They are used by homeowners and DIY enthusiasts for tasks such as inflating sports equipment, powering airbrushes, and operating pneumatic tools in home workshops.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/fire22.jpg" 
                                class="card-img-top air-p" 
                                alt="fire22"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Emergency Services</strong></h5>
                                <p class="card-text">Portable compressors are often used by emergency services such as fire departments and rescue teams for operating pneumatic rescue tools like hydraulic spreaders and cutters.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

            </section>

            {/* ******** */}

            <section className="portable-benefits">
                <h2 className="benefits-heading" >Benefits of Portable Compressors</h2>
                <h5 className="types-types">
                    <strong>Mobility:</strong> The primary benefit of portable compressors is their mobility, allowing users to easily transport them to different locations or job sites as needed.
                </h5>
                <h5 className="types-types">
                    <strong>Versatility:</strong> They can be used for a wide range of applications, from powering pneumatic tools to inflating tires and sports equipment.
                </h5> 
                <h5 className="types-types">
                    <strong>Compact Design:</strong> Portable compressors are designed to be compact and space-saving, making them suitable for use in confined or tight spaces.
                </h5> 
                <h5 className="types-types">
                    <strong>Convenience:</strong> Portable compressors offer convenience and flexibility, enabling users to have access to compressed air wherever it is needed without relying on fixed infrastructure.
                </h5>  
                <h5 className="types-types">
                    <strong>Emergency Preparedness:</strong> Portable compressors are useful for emergency situations, such as roadside tire inflation or powering emergency pneumatic tools during rescue operations.
                </h5>
            </section>



            <Footer />
        </div>
    );
};

export default ProductsPortable;