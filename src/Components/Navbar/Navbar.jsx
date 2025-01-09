import React, { useState } from "react";
import logo from "../../images/1.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      {/* Top Bar Section */}
      <div className="log">
        <div className="logo">
          <img src={logo} alt="Technext Solution" />
        </div>
        <div className="i">
          <i className="fas fa-clock"></i> Mon-Sat, 10:00 AM to 6:00 PM
        </div>
        <div className="i">
          <i className="fas fa-phone-alt"></i> +91-7310249234
        </div>
        <div className="i">
          <i className="fas fa-envelope"></i> info@technextsolution.com
        </div>
      </div>

      {/* Navbar Section */}
      <div className="Navbar-section">
        <p>Menu</p>
        <button
          className="hamburger-icon"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i> {/* Using Font Awesome icon */}
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
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
                Services <i class="fa-solid fa-caret-down"></i>
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
              <span className="flip-text" data-hover="Blogs">
                BLOGS
              </span>
            </div>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="contact-section">
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
