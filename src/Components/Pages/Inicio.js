import React from 'react'

const Inicio = () => {
  return (
    <div>
        <main class="mainIndex container">
            <h1 id="titulo">Vintage lens rentals</h1>
            <p id="subtitulo">Especialized film equipment</p>
            <hr /> <br />
            <section>
                <iframe className="videoC" width="90%" height="600px" src="https://www.youtube.com/embed/EK1HwowDe9U?start=3"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
            </section> <br />
            <hr />
        </main>
    </div>
  )
}

export default Inicio