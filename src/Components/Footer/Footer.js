import React from 'react'

function Footer() {
  return (
    <footer id="footer">
    <div className="redes">
        <a src="https://www.facebook.com/Lafilmboutique" target='_blank' rel="noopener noreferrer"> <i className="fab fa-facebook-f"></i> </a>
        <a src="https://www.instagram.com/lafilmboutique/" target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i> </a>
        <a src="https://www.pinterest.com/lafilmboutique" target='_blank' rel="noopener noreferrer"> <i className="fab fa-pinterest"></i> </a>
    </div>
    <div className="mb-3"> <br />
        <span className="d-flex justify-content-between">
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" />
            <button type="submit" className="btn btn-primary ms-2">Suscribe</button>
        </span>
        <div id="emailHelp" className="form-text">Receive our newsletter</div>
    </div>
    <section className="d-flex justify-content-end">
        <p className="credits">© 2013  www.LAFILMBOUTIQUE.com created by OFF-HOLLYWOOD FILMS LLC </p>
    </section>
</footer>
    )
}

export default Footer