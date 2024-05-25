// src/components/routes/Products/ProductsGas/ProductsOilFree.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsOilLubri.css';

const ProductsOilLubri = () =>{
    return(
        <div>

            <Header />

            <section  className="products-oil-lubri">
                <div className='pro-oil-lubri-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-oil-lubri" 
                    alt="Pro-main-bg-oil-lubri" 
                    />
                </div>
                <div className='container pro-oil-lubri-content'>
                    <h1 className='pro-oil-lubri-heading'>Oil-Lubricated Compressors</h1>
                    <p className='pro-oil-lubri-subheading'>
                    Oil-lubricated compressors utilize oil for lubricating the moving parts and 
                    sealing the compression chamber to reduce friction and prevent gas leakage 
                    during the compression process. The oil helps in cooling and sealing the 
                    internal components, ensuring smooth operation and longevity of the compressor.
                    </p>
                </div>

            </section>

            {/* ********** */}

            <section className="oil-lubri-types">
                <h2 className="types-heading" >Types of Oil-Lubricated Compressors</h2>
                <h5 className="types-types">
                  <li className="types-t-t"><strong>Reciprocating Compressors: </strong>These compressors use pistons driven by a crankshaft to compress gas. They require lubricating oil for the piston rings, cylinder walls, and other moving parts.</li>  
                  <li className="types-t-t"><strong>Rotary Screw Compressors:</strong>Rotary screw compressors use oil for lubricating the screws and sealing the compression chamber. The oil also helps in cooling and removing contaminants from the compressed air.</li>  
                  <li className="types-t-t"><strong>Rotary Vane Compressors: </strong>Rotary vane compressors use oil for lubricating the vanes and sealing the compression chamber. The oil also helps in maintaining airtight sealing and dissipating heat generated during compression.</li>  
                </h5>
            </section>

            {/* *************** */}

            <section className="oil-lubri-applications">
                <h2 className="applications-heading" >Applications of Oil-Lubricated Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/indus.jpg" 
                                class="card-img-top air-p" 
                                alt="indus"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Industrial Manufacturing</strong></h5>
                                <p class="card-text">Oil-lubricated compressors are commonly used in various industrial applications such as manufacturing, automotive, and metalworking for powering pneumatic tools, operating machinery, and providing compressed air for production processes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/food-beverage.jpg" 
                                class="card-img-top air-p" 
                                alt="food-beverage"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Food and Beverage Industry</strong></h5>
                                <p class="card-text">Oil-lubricated compressors are used in food and beverage processing plants for applications like packaging, bottling, and pneumatic conveying of food products.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/hvacc.jpg" 
                                class="card-img-top air-p" 
                                alt="hvacc"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>HVAC Systems</strong></h5>
                                <p class="card-text">Oil-lubricated compressors are used in heating, ventilation, and air conditioning (HVAC) systems for providing compressed air for cooling, heating, and ventilation purposes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/oil-petro.jpg" 
                                class="card-img-top air-p" 
                                alt="oil-petro"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Oil Refineries and Petrochemical Plants</strong></h5>
                                <p class="card-text">They are employed in oil refineries and petrochemical plants for various applications such as gas processing, pneumatic conveying, and equipment operation.</p>
                            </div>
                        </div>
                    </div>
                    
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/construc.jpg"
                                class="card-img-top air-p" 
                                alt="construc"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Construction</strong></h5>
                                <p class="card-text">They are used in construction sites for powering pneumatic tools like jackhammers, nail guns, and impact wrenches.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* ******** */}

            <section className="oil-lubri-benefits">
                <h2 className="benefits-heading" >Benefits of Oil-Lubricated Compressors</h2>
                <h5 className="types-types">
                    <strong>Versatility:</strong> They can handle a wide range of operating conditions and are suitable for various gas compression applications, offering flexibility in industrial settings.
                </h5>
                <h5 className="types-types">
                    <strong>Efficiency:</strong> Oil-lubricated compressors tend to have higher efficiency due to reduced friction and wear on internal components, resulting in better performance and energy savings.
                </h5> 
                <h5 className="types-types">
                    <strong>Durability:</strong> Proper lubrication provided by oil extends the lifespan of the compressor by reducing wear and tear on moving parts, leading to fewer breakdowns and maintenance requirements.
                </h5> 
                <h5 className="types-types">
                    <strong>Higher Pressure Ratios:</strong> Oil-lubricated compressors can typically achieve higher pressure ratios compared to oil-free compressors, making them suitable for applications requiring higher pressure levels.
                </h5>  
                <h5 className="types-types">
                    <strong>Sealing and Cooling:</strong> Oil not only lubricates but also helps in sealing and cooling the compression chamber, ensuring efficient compression and preventing gas leakage.
                </h5>
            </section>

            <Footer />

        </div>
    );
};

export default ProductsOilLubri;