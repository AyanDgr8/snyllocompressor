// src/components/routes/Landing/Third/Third.js
import React from 'react';
import './Third.css';

const Third = () => {
    return (
        <div>
            {/* <section className='half-half'>
                <h1 className='half-heading'>What are you searching for?</h1>
                <div className='half-links .justify-content-center'>
                    <a href="#" className="card-link linkin lie gasss">GAS COMPRESSORS</a>
                    <a href="#" className="card-link linkin lie">AIR COMPRESSORS</a>
                    <a href="#" className="card-link linkin lie">OIL FREE COMPRESSORS</a>
                    <a href="#" className="card-link linkin lie">PORTABLE COMPRESSORS</a>
                    <a href="#" className="card-link linkin lie">OIL LUBRICATED COMPRESSORS</a>
                    <a href="#" className="card-link linkin lie">ROTARY SCREW COMPRESSORS</a>
                    <a href="#" className="card-link linkin lie">DIESEL DRIVEN COMPRESSORS</a>
                </div>
            </section>     */}

            <section className='black-white'>
                <div className='half-left' >
                    <div className='half-para'>
                        A RANGE OF <strong>200+ PRODUCTS</strong>  TO SUIT YOUR REQUIREMENTS
                    </div>
                    <div className='half-linkss .justify-content-center'>
                        <p className="card-link linkin loo ">COMPLEX CASTINGS</p>
                        <p className="card-link linkin loo">PRECISION MACHINING</p>
                        <p className="card-link linkin loo">SECURELY WELDED</p>
                        <p className="card-link linkin loo">QUALITY ASSURED</p>
                        <p className="card-link linkin loo">EXCELLENCE EMBEDDED</p>
                    </div>
                </div>
                <div className='half-right'>
                    <img
                        src="./uploads/sny15.png"
                        className="img-fluid sny15"
                        alt="sny15"
                    />
                </div>
            </section>
        </div>
        
    );
}

export default Third;




