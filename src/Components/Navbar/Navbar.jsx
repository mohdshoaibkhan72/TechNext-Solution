import React from "react";
import logo from "../../images/1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="log">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <i className="fas fa-clock"></i> Mon-Sat, 10:00 AM to 6:00 PM
        </div>
        <div>
          <i className="fas fa-phone-alt"></i> +91-7310249234
        </div>
        <div>
          <i className="fas fa-envelope"></i> info@technextsolution.com
        </div>
      </div>

      {/* Navbar Section */}
      <div className="Navbar-section">
        <ul className="navbar-links">
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text" data-hover="Home">
                Home
              </span>
            </div>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text" data-hover="About Us">
                About Us
              </span>
            </div>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text" data-hover="Portfolio">
                Portfolio
              </span>
            </div>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text" data-hover="Services">
                Services
              </span>
            </div>
            <ul className="dropdown-content">
              <li>Web Development</li>
              <li>E-commerce Development</li>
              <li>App Development</li>
              <li>SEO</li>
            </ul>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text" data-hover="All Pages">
                BLOGS
              </span>
            </div>
          </li>
        </ul>
        <div className="contact-section">
          <button>Contact</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
