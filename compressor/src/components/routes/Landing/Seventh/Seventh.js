// src/components/routes/Landing/Seventh/Seventh.js


import React from 'react';
import './Seventh.css';

const Seventh = () => {
    return(
        <div>
            <section className='logo-countries'>
                <img 
                src="./uploads/maroon-logo.png" 
                className="img-fluid maroon-logo" 
                alt="maroon-logo"
                />
            </section>

            <section className='countries'>

                <div className='row d-flex justify-content-center'>

                    <img 
                    src="./uploads/country1.png" 
                    className="img-fluid country1 countryy" 
                    alt="country1"
                    />
                    <img 
                    src="./uploads/country2.png" 
                    className="img-fluid country2 countryy" 
                    alt="country2"
                    />
                    <img 
                    src="./uploads/country3.png" 
                    className="img-fluid country3 countryy" 
                    alt="country3"
                    />
                    <img 
                    src="./uploads/country4.png" 
                    className="img-fluid country4 countryy" 
                    alt="country4"
                    />
                    <img 
                    src="./uploads/country5.png" 
                    className="img-fluid country5 countryy" 
                    alt="country5"
                    />
                    <img 
                    src="./uploads/country6.png" 
                    className="img-fluid country6 countryy" 
                    alt="country6"
                    />

                </div>


            </section>

        </div>
    );
};

export default Seventh;