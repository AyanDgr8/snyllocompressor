// src/components/routes/Landing/Sixth/Sixth.js


import React from 'react';
import './Sixth.css';

const Sixth = () => {
    return (
        <div>
            <div className='two-headings'>
                <h4 className='heading-sixth'>OUR VIRTUES</h4>
                <h2 className='subheading-sixth'>DEFINES US</h2>
            </div>
            

            <section className='four-cards-sixth'>

                <div className="row d-flex justify-content-center">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="card border border-0 carddd">
                            <img 
                            src="./uploads/first-i.png" 
                            className=" position-relative top-0 start-50 translate-middle img-icon iconnn" 
                            alt="first-i"
                            />
                            <div className="card-body">
                                <h5 className="card-title">INNOVATION</h5>
                                <p className="card-text ca-te">Promoting a culture of innovation will ensure that we always retain a leading edge.</p>
                            </div>
                        </div>  

                        <div className="card border border-0 carddd" >
                            <img 
                            src="./uploads/second-i.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon iconnn" 
                            alt="second-i"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">SENSITIVIY</h5>
                                <p className="card-text ca-te">We value our relationships with stakeholders, so it's a priority to go that extra mile to cater to their needs intuitively.</p>
                            </div>
                        </div> 

                        <div className="card border border-0 carddd" >
                            <img 
                            src="./uploads/third-i.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon oemodm-icon iconnn" 
                            alt="third-i"
                            />
                            <div className="card-body ">
                                <h5 className="card-title">QUALITY</h5>
                                <p className="card-text ca-te">We deliver uncompromised and top-notch  quality consistently to all those who share vested interests. </p>
                            </div>
                        </div> 

                        <div className="card border border-0 carddd" >
                            <img 
                            src="./uploads/fourth-i.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon iconnn" 
                            alt="fourth-i"
                            />
                            <div className="card-body">
                                <h5 className="card-title">SPEED</h5>
                                <p className="card-text ca-te">Our aim to grow exponentially as an organization by seizing opportunities as quickly as they arise. </p>
                            </div>
                        </div> 
                    </div>
                </div>

            </section>

            <section className='three-cards-sixth'>
                <div className="row d-flex justify-content-center">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="card border border-0 carddd">
                            <img 
                                src="./uploads/fifth-i.png" 
                                className=" position-relative top-0 start-50 translate-middle img-icon iconnn" 
                                alt="fifth-i"
                            />
                            <div className="card-body">
                                <h5 className="card-title">COLLABORATION</h5>
                                <p className="card-text ca-te">Collaborating with each other will lead to greater synergy and higher efficiency.</p>
                            </div>
                        </div>  

                        <div className="card border border-0 carddd" >
                            <img 
                                src="./uploads/sixth-i.png" 
                                className="position-relative top-0 start-50 translate-middle img-icon iconnn" 
                                alt="sixth-i"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">INTEGRITY</h5>
                                <p className="card-text ca-te">Honestly and integrity are the foundation of all undertakings in our relationships with stakeholders.</p>
                            </div>
                        </div> 

                        <div className="card border border-0 carddd" >
                            <img 
                                src="./uploads/seventh-i.png" 
                                className="position-relative top-0 start-50 translate-middle img-icon oemodm-icon iconnn" 
                                alt="seventh-i"
                            />
                            <div className="card-body ">
                                <h5 className="card-title">COST PRUDENCE</h5>
                                <p className="card-text ca-te">Being judicious in the way we manage our costs will give us a competitive edge and make us resilient.</p>
                            </div>
                        </div> 
                    </div>
                </div>

            </section>

            <div className='two-headings'>
                <h4 className='heading-sixth'>FOLLOW OUR</h4>
                <h2 className='subheading-sixth'>GLOBAL FOOTPRINT</h2>
            </div>

            <section className='three-cards-sixth'>
                <div className="row d-flex justify-content-center">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="card border border-0 carddd">
                            <img 
                                src="./uploads/threee-one.png" 
                                className=" position-relative top-0 start-50 translate-middle img-icon iconn" 
                                alt="threee-one"
                            />
                            <div className="card-body">
                                <h6 className="card-title titlele">OF CUSTOMER CENTRIC INNOVATION</h6>
                            </div>
                        </div>  

                        <div className="card border border-0 carddd" >
                            <img 
                                src="./uploads/threee-two.png" 
                                className="position-relative top-0 start-50 translate-middle img-icon iconn" 
                                alt="threee-two"
                            />
                            <div className="card-body text-center">
                                <h6 className="card-title titlele">SUCCESSFUL INSTALLATIONS WORLDWIDE</h6>
                            </div>
                        </div> 

                        <div className="card border border-0 carddd" >
                            <img 
                                src="./uploads/threee-three.png" 
                                className="position-relative top-0 start-50 translate-middle img-icon iconn" 
                                alt="threee-three"
                            />
                            <div className="card-body ">
                                <h6 className="card-title titlele">COUNTRIES AND COUNTING</h6>
                            </div>
                        </div> 
                    </div>
                </div>

            </section>



        </div>
    );
};

export default Sixth;