import React from 'react'

function Frase() {
  return (
    <section className="container">
        <p className="frase">If it can be written or thought, it can be filmed</p>
        <p className="fraseAutor">- Stanley Kubrick -</p>
        <hr className="container barritas" />
        <details className="container desplegable">
            <summary>
                <h1 className="nosotrosT">WHAT DO WE DO</h1>
            </summary>
            <p className="nosotrosP">
                We specialized in long term rentals and projects. We are a small dedicated team that will help you
                create a
                unique visual imaging. We strive to do custom solutions for each project big or small and we have
                put
                together all the tools to make sure your story tells the way it needs to be told .
            </p>
        </details>
    </section>
  )
}

export default Frase