// src/components/routes/Landing/Eighth/Eighth.js


import React from 'react';
import './Eighth.css';

const Eighth = () => {
    return(
        <div>
            <section className='poor-child'>

                <div className='poor-container'>

                    <div className='poor-left'>
                        <img
                            src="./uploads/poor-children.png"
                            className="img-fluid poor-children"
                            alt="poor-children"
                        />   
                    </div>
                    

                    <div className='poor-right'>
                        <div className='poor-body'>
                            <h1 className='poor-heading'>SnylloAir CSR</h1>
                            <div className='poor-para'>
                                At SnylloAir, we aim to give back to the community through campaigns and programs
                                designed to empower, upfit and better society. SnylloAir has unique several projects
                                in the field of education, vocational training, and community advancement.
                            </div>
                            <a href="#" className="card-link linkin livin linking">Read More</a>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Eighth;