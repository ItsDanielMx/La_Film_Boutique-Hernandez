import React from 'react'

function Formulario() {
  return ( 
      <>
        <h1 className="talk container pt-5">Want to talk to a human being? We are human beings call us.</h1>
        <hr className="container" />
        <section className="contacto container">
            <form className="row g-3" action="emailto:danielhernandez09012002@gmailcom" method="post">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" name="nombre" aria-label="First name" className="form-control" />
                    <input type="text" name="apellido" aria-label="Last name" className="form-control" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Subject</span>
                    <input type="text" name="asunto" className="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="mb-3">
                    <label htmlFor="validationTextarea" className="form-label">Message</label>
                    <textarea name="mensaje" className="form-control" id="validationTextarea"
                        placeholder="Required example textarea" required></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-dark mb-3">Contact</button>
                </div>
            </form>
        </section>
        <hr className='container' />
        </>
  )
}

export default Formulario