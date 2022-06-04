import React from 'react'
import { Link } from 'react-router-dom'


function CarruselCamaras() {
  return (
    <section className="container mt-5 mb-5">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <Link className="d-flex justify-content-center" to='/categoria/camera'>
                            <img src="https://res.cloudinary.com/itsdanielmx/image/upload/v1653433863/img/Arri-Alexa-Mini-PL-1_y1dzww.jpg" width="78.85%"
                                alt="Arri alexa Mini" /></Link>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ARRI ALEXA MINI CAMERA 4:3 ARRIRAW</h5>
                            <p>Rental per day $875.00</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link className="d-flex justify-content-center" to='/categoria/camera'>
                            <img src="https://res.cloudinary.com/itsdanielmx/image/upload/v1653433855/img/ALEXA-Mini-LF-SP-47-MVF-2-left-front-white_a6zfrt.jpg" width="65.5%"
                                alt="ARRI ALEXA LF or MINI LF" /></Link>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ARRI ALEXA LF or MINI LF</h5>
                            <p>Rental per day $2,500.00</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link className="d-flex justify-content-center" to='/categoria/camera'>
                            <img src="https://res.cloudinary.com/itsdanielmx/image/upload/v1653433873/img/Panasonic-Varicam_qhixdc.jpg" width="39%" className="ma"
                                alt="Panasonic-Varicam" /></Link>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PANASONIC VARICAM LT</h5>
                            <p>Rental per day $450.00</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link className="d-flex justify-content-center" to='/categoria/lense'>
                            <img src="https://res.cloudinary.com/itsdanielmx/image/upload/v1654299828/img/Cooke40mm_gjc7qf.jpg" width="49.3%"
                                alt="Cooke 40mm miniS4/i Lens T2.8" /></Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link className="d-flex justify-content-center" to='/categoria/lense'>
                            <img src="https://res.cloudinary.com/itsdanielmx/image/upload/v1654304149/img/Cooke50mm_z3vwt1.jpg" width="49.3%"
                                alt="Cooke S4/i 50mm, T2.0 Prime Lens" /></Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link className="d-flex justify-content-center" to='/categoria/lense'>
                            <img src="https://res.cloudinary.com/itsdanielmx/image/upload/v1654299812/img/Cooke100mm_mbkfwh.jpg" width="49.3%"
                                alt="Cooke 100mm miniS4/i Lens T2.8" /></Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr />
        </section>
  )
}

export default CarruselCamaras