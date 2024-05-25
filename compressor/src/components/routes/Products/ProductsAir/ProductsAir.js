// src/components/routes/Products/ProductsAir/ProductsAir.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsAir.css';

const ProductsAir = () =>{
    return(
        <div>
            <Header />

            <section className="products-air">
                <div className='pro-air-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-air" 
                    alt="Pro-main-bg-air" 
                    />
                </div>
                <div className='container pro-air-content'>
                    <h1 className='pro-air-heading'>Air Compressors</h1>
                    <p className='pro-air-subheading'>
                    Air compressors work by drawing in atmospheric air and 
                    mechanically reducing its volume, thereby increasing its 
                    pressure. The compressed air is stored in a tank or released 
                    directly for use in various applications. These machines come 
                    in different sizes and configurations to suit diverse needs. 
                    </p>
                </div>
            </section>

            {/* **************** */}

            <section className="air-types">
                <h2 className="types-heading" >Types of Air Compressors</h2>
                <h5 className="types-types">
                    <strong>Reciprocating (Piston) Air Compressors:</strong> These compressors use one or more pistons driven by a crankshaft to compress air. They are available in single-stage and two-stage configurations, with the latter providing higher pressures.
                </h5>
                <h5 className="types-types">
                    <strong>Rotary Screw Air Compressors:</strong> Rotary screw compressors use a pair of interlocking helical rotors to compress air. They are known for their continuous operation, high efficiency, and relatively low noise levels.
                </h5> 
                <h5 className="types-types">
                    <strong>Centrifugal Air Compressors:</strong> These compressors utilize centrifugal force to accelerate and compress air. They are suitable for high-volume applications requiring relatively low to moderate pressures.
                </h5> 
                <h5 className="types-types">
                    <strong>Scroll Air Compressors:</strong> Scroll compressors use orbiting and fixed scrolls to compress air. They are compact, efficient, and often used in applications requiring lower volumes of compressed air.
                </h5> 
                

            </section>

            {/* *************** */}

            <section className="air-applications">
                <h2 className="applications-heading" >Applications of Air Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    


                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/hvac.jpg" 
                                class="card-img-top air-p" 
                                alt="hvac"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>HVAC Systems</strong></h5>
                                <p class="card-text">Air compressors are integral to heating, ventilation, and air conditioning (HVAC) systems, where they provide compressed air for temperature control, refrigeration, and ventilation.</p>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/construction.jpg" 
                                class="card-img-top air-p" 
                                alt="construction"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Construction</strong></h5>
                                <p class="card-text">Compressors are used on construction sites to power pneumatic tools, inflate tires, and operate machinery like jackhammers and concrete sprayers.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/industrial.jpg" 
                                class="card-img-top air-p" 
                                alt="industrial"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Industrial Manufacturing</strong></h5>
                                <p class="card-text">Air compressors power pneumatic tools such as drills, nail guns, sanders, and impact wrenches in various manufacturing processes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/automobile.jpg" 
                                class="card-img-top air-p" 
                                alt="automobile"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Automotive Industry</strong></h5>
                                <p class="card-text">Compressors are used in automotive assembly lines for painting, welding, and operating pneumatic tools.</p>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/medical.jpg"
                                class="card-img-top air-p" 
                                alt="medical"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Medical Equipment</strong></h5>
                                <p class="card-text">Air compressors power medical devices like dental drills, surgical tools, and respirators in healthcare facilities.</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/food.jpg" 
                                class="card-img-top air-p" 
                                alt="food"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Food and Beverage Industry</strong></h5>
                                <p class="card-text">Compressed air is used for packaging, bottling, and conveying food and beverages in processing plants.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

            </section>

            {/* ******** */}

            <section className="air-benefits">
                <h2 className="benefits-heading" >Benefits of Air Compressors</h2>
                <h5 className="types-types">
                    <strong>Versatility:</strong>  Air compressors can power a wide range of pneumatic tools and machinery, making them versatile assets in various industries.
                </h5>
                <h5 className="types-types">
                    <strong>Efficiency:</strong> Modern air compressors are designed for high efficiency, reducing energy consumption and operational costs.
                </h5> 
                <h5 className="types-types">
                    <strong>Reliability:</strong> With proper maintenance, air compressors can provide reliable performance for extended periods, minimizing downtime.
                </h5> 
                <h5 className="types-types">
                    <strong>Compactness:</strong> Many air compressors are compact and portable, allowing for easy transportation and installation in different locations.
                </h5>  
                <h5 className="types-types">
                    <strong>Safety:</strong> Pneumatic systems powered by air compressors are often safer to operate than those using other energy sources like electricity or hydraulics.
                </h5> 
                <h5 className="types-types">
                    <strong>Environmental Friendliness:</strong> Air compressors produce fewer emissions compared to other power sources, contributing to a cleaner working environment.
                </h5>
            </section>


            <Footer />
            
        </div>
    );
};

export default ProductsAir;