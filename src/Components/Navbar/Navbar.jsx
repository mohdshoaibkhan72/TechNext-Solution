import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../images/1 copy.png";
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
          <i className="fas fa-phone-alt"></i>{" "}
          <a href="tel:+917310249234">+91-7310249234</a>
        </div>
        <div className="i">
          <i className="fas fa-envelope"></i>{" "}
          <a href="mailto:info@technextsolution.com">
            info@technextsolution.com
          </a>
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
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <li className="dropdown">
            <div className="flip-container">
              <Link to="/" className="flip-text">
                Home
              </Link>{" "}
              {/* Changed to Link */}
            </div>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <Link to="/aboutus" className="flip-text">
                About Us
              </Link>{" "}
              {/* Changed to Link */}
            </div>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <Link to="/portfolio" className="flip-text">
                Portfolio
              </Link>{" "}
              {/* Changed to Link */}
            </div>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <span className="flip-text">
                Services <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>
            <ul className="dropdown-content">
              <li>
                <Link to="/services/web-development">Web Development</Link>{" "}
                {/* Link to specific service */}
              </li>
              <li>
                <Link to="/services/e-commerce">E-commerce Development</Link>{" "}
                {/* Link to specific service */}
              </li>
              <li>
                <Link to="/services/app-development">App Development</Link>{" "}
                {/* Link to specific service */}
              </li>
              <li>
                <Link to="/services/seo">SEO</Link>{" "}
                {/* Link to specific service */}
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <div className="flip-container">
              <Link to="/blogs" className="flip-text">
                BLOGS
              </Link>{" "}
              {/* Changed to Link */}
            </div>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="contact-section">
          <button href="tel:+917310249234">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
