// src/components/routes/Products/ProductsGas/ProductsOilFree.js


import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Landing/Footer/Footer";

import './ProductsOilFree.css';

const ProductsOilFree = () =>{
    return(
        <div>
            <Header />

            <section  className="products-oil-free">
                <div className='pro-oil-free-main-bg'>
                    <img 
                    src="../uploads/contact-machinee.png"
                    class="img-fluid bg-oil-free" 
                    alt="Pro-main-bg-oil-free" 
                    />
                </div>
                <div className='container pro-oil-free-content'>
                    <h1 className='pro-oil-free-heading'>Oil-Free Compressors</h1>
                    <p className='pro-oil-free-subheading'>
                    Oil-free compressors are specifically engineered to eliminate the 
                    risk of oil contamination in the compressed air. They achieve this 
                    by using alternative sealing methods and lubrication systems that 
                    do not introduce oil into the compression chamber. This ensures that 
                    the compressed air produced is free from oil contaminants, making it 
                    suitable for applications where clean air is critical.
                    </p>
                </div>

            </section>

            {/* **************** */}

            <section className="oil-free-types">
                <h2 className="types-heading" >Types of Oil-Free Compressors</h2>
                <h5 className="types-types">
                  <li className="types-t-t"><strong>Scroll Compressors: </strong>These compressors use a scroll mechanism to compress air. They are known for their quiet operation, low maintenance requirements, and oil-free operation. Scroll compressors are commonly used in applications requiring clean and quiet compressed air, such as laboratories and medical facilities.</li>  
                  <li className="types-t-t"><strong>Dry Screw Compressors:</strong>These compressors utilize rotors with specially designed profiles to compress air without the need for oil lubrication. They are suitable for high-capacity applications and are often used in industries where oil contamination is unacceptable, such as food and beverage processing and pharmaceutical manufacturing.</li>  
                  <li className="types-t-t"><strong>Oil-free Rotary Tooth Compressors: </strong>These compressors use rotors with helical lobes to compress air. They are designed to operate without oil lubrication, ensuring clean and oil-free compressed air. Oil-free rotary tooth compressors are commonly used in applications requiring continuous and reliable compressed air supply, such as automotive manufacturing and electronics production.</li>  
                </h5>
            </section>

            {/* *************** */}

            <section className="oil-free-applications">
                <h2 className="applications-heading" >Applications of Oil-Free Compressors</h2>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/foody.jpg" 
                                class="card-img-top air-p" 
                                alt="foody"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Food and Beverage Industry</strong></h5>
                                <p class="card-text">Oil-free compressors are widely used in the food and beverage industry to provide clean compressed air for various processes, including packaging, bottling, and food handling, where oil contamination could compromise product quality and safety.</p>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/labo.jpg"
                                class="card-img-top air-p" 
                                alt="labo"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Laboratories and Research Facilities</strong></h5>
                                <p class="card-text">Oil-free compressors are commonly used in laboratories and research facilities where clean air is required for various experiments and analytical instruments, such as gas chromatographs and mass spectrometers.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/electreci.png" 
                                class="card-img-top air-p" 
                                alt="electreci"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Electronics  Manufacturing</strong></h5>
                                <p class="card-text">Oil-free compressed air is essential in electronics manufacturing processes, such as circuit board assembly and semiconductor production, where oil contamination could damage sensitive components.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/medici.jpeg" 
                                class="card-img-top air-p" 
                                alt="medici"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Medical and Healthcare Facilities</strong></h5>
                                <p class="card-text">Oil-free compressors are used in medical and healthcare facilities to provide clean compressed air for medical devices, such as ventilators, anaesthesia machines, and dental equipment, to ensure patient safety and hygiene.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card app-cards">
                            <img 
                                src="../uploads/pharma.jpg" 
                                class="card-img-top air-p" 
                                alt="pharma"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Pharmaceutical Manufacturing</strong></h5>
                                <p class="card-text">Oil-free compressors are essential in pharmaceutical manufacturing facilities where clean air is critical to prevent contamination of drugs and medical products.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

            </section>

            {/* ******** */}

            <section className="oil-free-benefits">
                <h2 className="benefits-heading" >Benefits of Oil-Free Compressors</h2>
                <h5 className="types-types">
                    <strong>Versatility:</strong>  Oil-free compressors are versatile and can be used in a wide range of applications where clean, oil-free compressed air is required, offering flexibility and reliability in various industries.
                </h5>
                <h5 className="types-types">
                    <strong>Clean, Oil-free Air:</strong> Oil-free compressors ensure that the compressed air produced is free from oil contaminants, making them suitable for applications where clean air is essential, such as food processing and pharmaceutical manufacturing.
                </h5> 
                <h5 className="types-types">
                    <strong>Reduced Maintenance:</strong> Since oil-free compressors do not require oil lubrication in the compression chamber, they typically have lower maintenance requirements compared to oil-lubricated compressors, resulting in reduced downtime and operating costs.
                </h5> 
                <h5 className="types-types">
                    <strong>Product Quality Assurance:</strong> Oil-free compressors help maintain product quality and integrity in industries where oil contamination could compromise product safety and compliance with regulatory standards.
                </h5>  
                <h5 className="types-types">
                    <strong>Environmental Friendliness:</strong> Oil-free compressors eliminate the risk of oil spills and reduce the environmental impact associated with oil lubrication, making them environmentally friendly alternatives for compressed air generation.
                </h5>
            </section>



            <Footer />
        </div>
    );
};

export default ProductsOilFree;