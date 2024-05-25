// src/components/routes/Landing/Firstt/Firstt.js

import React, { useEffect } from 'react';
import { Carousel, initMDB } from "mdb-ui-kit";
import { Link } from 'react-router-dom';
import "mdb-ui-kit/css/mdb.min.css"; // Import 'mdb-ui-kit' CSS
import './Firstt.css';

const Firstt = () => {
    useEffect(() => {
        initMDB({ Carousel });
    }, []);
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return(
        <div>
            <div id="carouselExampleCaptions" class="carousel carousell carousel-fade slide maroon" data-mdb-ride="carousel" data-mdb-carousel-init>
                <div class="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="3"
                    aria-label="Slide 4"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="4"
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="5"
                    aria-label="Slide 6"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="6"
                    aria-label="Slide 7"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="7"
                    aria-label="Slide 8"
                ></button>
                </div>
                <div class="carousel-inner maroons">
                    <div class="carousel-item active">
                        <img src="./uploads/maroon-main.png" class="d-block w-100" alt="maroon-main"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products" onClick={scrollToTop} class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img src="./uploads/maroon111.png" class="d-block w-100" alt="maroon1"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/air"  onClick={scrollToTop} class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./uploads/maroon222.png" class="d-block w-100" alt="maroon2"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/oil-lubricated"  onClick={scrollToTop} class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./uploads/maroon333.png" class="d-block w-100" alt="maroon3"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/oil-free"  onClick={scrollToTop}  class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./uploads/maroon444.png" class="d-block w-100" alt="maroon4"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/gas"  onClick={scrollToTop}  class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./uploads/maroon555.png" class="d-block w-100" alt="maroon5"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/diesel"  onClick={scrollToTop}  class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./uploads/maroon666.png" class="d-block w-100" alt="maroon6"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/portable"  onClick={scrollToTop}  class="btn btns position-relative  start-10 finding">Find More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./uploads/maroon777.png" class="d-block w-100" alt="maroon7"/>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to="/products/rotary"  onClick={scrollToTop}  class="btn btns position-relative  start-10">Find More</Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export  default Firstt;