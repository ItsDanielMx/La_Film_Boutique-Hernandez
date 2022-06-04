import React from 'react'
import { Link } from 'react-router-dom'
import CarruselCamaras from '../Inicio/CarruselCamaras'
import CarruselLentes from '../Inicio/CarruselCamaras'

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
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
            </section> <br />
            <hr />
        </main>
        <CarruselCamaras />
      </div>
  )
}

export default Inicio