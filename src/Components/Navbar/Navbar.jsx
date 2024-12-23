import React from "react";
import logo from "../../images/1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar-section">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="dropdown">
          <div className="flip-container">
            <span className="flip-text" data-hover="Demo">
              Demo
            </span>
          </div>
          <ul className="dropdown-content">
            <li>Portfolio</li>
            <li>Showcase</li>
            <li>More</li>
          </ul>
        </li>
        <li className="dropdown">
          <div className="flip-container">
            <span className="flip-text" data-hover="Company">
              Company
            </span>
          </div>
          <ul className="dropdown-content">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </li>
        <li className="dropdown">
          <div className="flip-container">
            <span className="flip-text" data-hover="Services">
              Services
            </span>
          </div>
          <ul className="dropdown-content">
            <li>Web Development</li>
            <li>App Development</li>
            <li>SEO</li>
          </ul>
        </li>
        <li className="dropdown">
          <div className="flip-container">
            <span className="flip-text" data-hover="Contact">
              Contact
            </span>
          </div>
          <ul className="dropdown-content">
            <li>Contact Form</li>
            <li>Support</li>
            <li>Location</li>
          </ul>
        </li>
        <li className="dropdown">
          <div className="flip-container">
            <span className="flip-text" data-hover="All Pages">
              All Pages
            </span>
          </div>
          <ul className="dropdown-content">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </li>
      </ul>
      <div className="contact-section">
        <button>Get In Touch</button>
      </div>
    </div>
  );
}

export default Navbar;
