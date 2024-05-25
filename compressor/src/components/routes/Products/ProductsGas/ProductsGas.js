// src/components/routes/Products/ProductsGas/ProductsGas.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsGas.css';

const ProductsGas = () =>{
    return(
        <div>
            <Header />

            <section className="products-gas">
                <div className='pro-gas-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-gas" 
                    alt="Pro-main-bg-gas" 
                    />
                </div>
                <div className='container pro-gas-content'>
                    <h1 className='pro-gas-heading'>Gas Compressors</h1>
                    <p className='pro-gas-subheading'>
                    Gas compressors work by reducing the volume of a gas, 
                    thereby increasing its pressure. They typically consist 
                    of components such as cylinders, pistons, valves, and sometimes 
                    rotors or impellers. Gas enters the compressor at a certain pressure 
                    and volume, and through mechanical action, the volume decreases, 
                    causing an increase in pressure. This compressed gas can then be stored, 
                    transported, or used for various applications.
                    </p>
                </div>
            </section>

            {/* **************** */}

            <section className="gas-types">
                <h2 className="types-heading" >Types of Gas Compressors</h2>
                <h5 className="types-types">
                  <ul><strong className="gass">Positive Displacement Compressors</strong>
                  <li><strong>Reciprocating Compressors: </strong>Utilize pistons driven by a crankshaft to compress gas.</li>  
                  <li><strong>Rotary Screw Compressors:</strong>Use intermeshing  rotors to compress gas.</li>  
                  <li><strong>Rotary Vane Compressors: </strong>Employ vanes mounted on a rotor to compress gas.</li>  
                  </ul>
                </h5>

                <h5 className="types-types ">
                  <ul><strong className="gass">Dynamic Compressors</strong>
                  <li><strong>Centrifugal Compressors: </strong>Utilize a high-speed rotating impeller to impart kinetic energy to the gas, which is then converted into pressure by diffusers.</li>  
                  <li><strong>Axial Compressors:</strong>Use multiple rows of rotating and stationary airfoils to compress gas in a continuous flow.</li>  
                  </ul>
                </h5>
                

            </section>

            {/* *************** */}

            <section className="gas-applications">
                <h2 className="applications-heading" >Applications of Gas Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/industry.jpg" 
                                class="card-img-top air-p" 
                                alt="industry"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Industrial Processes</strong></h5>
                                <p class="card-text">Gas compressors are used in various industrial applications such as manufacturing, chemical processing, and power generation. They are used for processes like pneumatic conveying, gas separation, and compression for power generation.</p>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/oil-gas.jpg" 
                                class="card-img-top air-p" 
                                alt="oil-gas"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Oil and Gas Industry</strong></h5>
                                <p class="card-text">Compressors are crucial for gas gathering, transmission, and processing in the oil and gas industry. They compress natural gas for transportation through pipelines and for processing into marketable products.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/fridge.jpg" 
                                class="card-img-top air-p" 
                                alt="fridge"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Refrigeration and Air Conditioning</strong></h5>
                                <p class="card-text">Gas compressors play a vital role in refrigeration and air conditioning systems by compressing refrigerant gases to facilitate heat exchange processes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/airplane.jpg" 
                                class="card-img-top air-p" 
                                alt="airplane"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Aerospace and Aviation</strong></h5>
                                <p class="card-text">Gas compressors are used in aircraft engines to compress air for combustion, providing thrust for propulsion.</p>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/medicall.jpg"
                                class="card-img-top air-p" 
                                alt="medicall"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Medical Equipment</strong></h5>
                                <p class="card-text">Gas compressors are utilized in medical equipment such as oxygen concentrators and ventilators to compress and deliver medical gases to patients.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

            </section>

            {/* ******** */}

            <section className="gas-benefits">
                <h2 className="benefits-heading" >Benefits of Gas Compressors</h2>
                
                <h5 className="types-types">
                    <strong>Efficiency: </strong> Gas compressors enable efficient handling and transportation of gases, making industrial processes more economical.
                </h5> 
                
                <h5 className="types-types">
                    <strong>Versatility: </strong> Gas compressors can be adapted for use with different gases and in various applications, making them versatile tools in multiple industries.
                </h5>

                <h5 className="types-types">
                    <strong>Environmental Benefits: </strong> In applications like refrigeration and air conditioning, modern compressors are designed to use environmentally friendly refrigerants, reducing the impact on the environment.
                </h5> 

                <h5 className="types-types">
                    <strong>Process Control: </strong> Compressors provide precise control over gas pressure, ensuring smooth and consistent industrial processes.
                </h5>  

                <h5 className="types-types">
                    <strong>Energy Savings: </strong> By compressing gases, they allow for the storage and transportation of large volumes of gas in a smaller space, leading to energy savings during transportation.
                </h5> 
            </section>


            <Footer />
            
        </div>
    );
};

export default ProductsGas;