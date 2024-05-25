// src/components/routes/Landing/Fifth/Fifth.js

import  React from 'react';

import  './Fifth.css';

const  Fifth = () => {
    return(
        <div>

            <section className='octopus'>

                <div className='octopus-container'>

                    <div className='octopus-left'>
                        
                    <h1 className='octopus-heading'>MEDICAL AIR COMPRESSORS & VACCUM PUMPS</h1>
                        <div className='octopus-body'>
                            <div className='octopus-para'>
                                Pattons Medical sells medical scrool compressors, vaccum pumps,
                                driers and other medical gas equipment. For more information you can 
                                visit the website.
                            </div>
                            <a href="#" className="card-link linkin livin">View Products</a>
                        </div>
                        
                    </div>

                    <div className='octopus-right'>
                        <img
                            src="./uploads/main.png"
                            className="img-fluid octopuss"
                            alt="octopuss"
                        />
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Fifth;