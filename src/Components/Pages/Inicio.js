import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Inicio = () => {
  return (
      <div>
        <main className="mainIndex container">
            <h1 id="titulo">Vintage lens rentals</h1>
            <p id="subtitulo">Especialized film equipment</p>
            <hr /> <br />
            <section>
                <iframe className="videoC" width="90%" height="600px" src="https://www.youtube.com/embed/EK1HwowDe9U?start=3"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
            </section> <br />
            <hr />
        </main>
        <section className="container mt-5 mb-5">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <Link className="d-flex justify-content-center" to='/productos'>
                        <img src="./Arri-Alexa-Mini-PL-1.jpg" width="49.5%"
                            alt="Arri alexa Mini" /></Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>ARRI ALEXA MINI CAMERA 4:3 ARRIRAW</h5>
                        <p>Rental per day $875.00</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <Link className="d-flex justify-content-center" to='/productos'>
                        <img src="./ALEXA-Mini-LF-SP-47-MVF-2-left-front-white.jpg" width="65.5%"
                            alt="ARRI ALEXA LF or MINI LF" /></Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>ARRI ALEXA LF or MINI LF</h5>
                        <p>Rental per day $2,500.00</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <Link className="d-flex justify-content-center" to='/productos'>
                        <img src="./Panasonic-Varicam.jpg" width="39%" className="ma"
                            alt="Panasonic-Varicam" /></Link>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>PANASONIC VARICAM LT</h5>
                        <p>Rental per day $450.00</p>
                    </div>
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
        <Footer />
      </div>
  )
}

export default Inicio