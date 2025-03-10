import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo Container */}
            <div className="logo-container">
                {/* Change '/logo.png' to the path of your actual logo in /public */}
                <img src="./logo.jpg" alt="Nexalytica Logo" className="logo-img" />
                <div className="logo-text">Nexalytica</div>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products-services">Products &amp; Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#blog">Blog</a></li>
                { /*<li><a href="#team">Team</a></li>*/}
                {/*<li><a href="#schedule">Schedule</a></li>*/}
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
