import React from 'react'

function FormularioSignUp() {
  return (
    <>
    <h1 className="mt-5 container createA">Create account</h1>
    <hr className="container" />
    <section className="register container">
        <form>
            <div className="sexo">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Other
                    </label>
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" className="form-control" />
                <input type="text" aria-label="Last name" className="form-control" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">I accept the terms and conditions</label>
            </div>
            <button type="submit" id="signUp" className="btn btn-primary mb-5">Submit</button>
        </form>
    </section>
    </>
  )
}

export default FormularioSignUp