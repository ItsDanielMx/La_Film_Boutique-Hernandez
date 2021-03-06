import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const navbar = () =>  {
  return (
    <div>
        <header id='header'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className=" titulo navbar-brand" to='/'>
                        <img src='../siemens-star.png' alt="LAFILMBOUTIQUE" width="40" height="40"
                            className="d-inline-block align-text-top me-2"></img>
                        LA Film Boutique
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Contacto'>Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Productos" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/categoria/camera">Cameras</Link></li>
                                    <li><Link className="dropdown-item" to="/categoria/lense">Lenses</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/Productos">All Products</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/AboutUs'>About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Login" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/SignUp">Sign Up</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/Login">Settings</Link></li>
                                </ul>
                            </li>
                            <li className='CartWidget'><Link to='/Cart' className='CartWidget'><CartWidget /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default navbar