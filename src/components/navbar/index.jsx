import React from 'react'
import { Wrapper } from "./navbar.styles";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Wrapper>
            <nav className="navbar navbar-expand-lg navbar-light bg-darkblue01 justify-content-between py-4">
                <div className="container-fluid wd-85">
                    <Link to="/login" className="navbar-brand bg-darkblue04"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-4">
                                <Link to="/" className="nav-link active">Our Services</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link to="/" className="nav-link active">Why Us</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link to="/" className="nav-link active">Testimonial</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link to="/" className="nav-link active">FAQ</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link to="/register" className="btn btn-success bg-limegreen fw-bold">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Wrapper>
    )
}

export default Navbar