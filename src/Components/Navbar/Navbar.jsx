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
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
