import React from 'react'
import { Link } from 'react-router-dom'

function FormularioLogin() {
  return (
    <>
        <div id="bienvenido" className="mt-3 container"></div>
        <div className="user pt-5">
            <img src="../user.png" width="40%" alt="user" />
        </div>
        <section className="iniciarS">
            <div className="formulario">
                <form className="row g-3">
                    <div className="col-auto">
                        <label for="staticEmail2"  className="visually-hidden">Email</label>
                        <input type="email" className="form-control" id="email exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>
                    <div className="col-auto">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" id="login" className="btn btn-dark mb-3">Login</button>
                    </div>
                </form>
                <h1 className="signUp">You don't have an account? <Link to="/SignUp">Sign up now</Link></h1>
            </div>
        </section>
    </>
  )
}

export default FormularioLogin