import React from'react';
import './Navbar.css';
import logo from "../images/almaas-transparent.png"



const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-logo">
                    <img src={logo} width='190px' height='auto' max-width='100%' max-height='100%' alt='Logo' />
                </div>
                <div className="Navbar-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;