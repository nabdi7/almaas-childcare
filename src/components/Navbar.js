import React from'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../images/almaas-transparent.png"



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-links-left">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-logo">
                    <img src={logo} width='190px' height='auto' max-width='100%' max-height='100%' alt='Logo' />
                </div>
                <div className="navbar-links-right">
                    <ul>
                        <li><Link to="/services">Services</Link></li>
                        <li>
                            <Link to="/contact" className='active'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;