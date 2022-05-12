import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () =>  {
  return (
    <div>
        <header id='header'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link class=" titulo navbar-brand" to='/'>
                        <img src='./siemens-star.png' alt="LAFILMBOUTIQUE" width="40" height="40"
                            className="d-inline-block align-text-top me-2"></img>
                        LA Film Boutique
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse menu" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to='/Inicio'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/Contact'>Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/Products'>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/AboutUs'>About Us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/Login" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/Login">Login</Link></li>
                                    <li><Link class="dropdown-item" to="/SignUp">Sign Up</Link></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><Link class="dropdown-item" to="/Login">Settings</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default navbar