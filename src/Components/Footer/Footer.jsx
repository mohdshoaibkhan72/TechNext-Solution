import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            {/* Address and Contact Details */}
            <div className="footer-address-social">
              <div className="footer-address">
                <h4>Find Us</h4>
                <p>
                  <i className="fas fa-map-marker-alt"></i> SCO 45-46, Sector
                  34-A, Chandigarh, India
                </p>
                <p>
                  <i className="fas fa-envelope"></i> info@technextsolution.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> +91 73102 49234
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="footer-social-icons">
                <h4>Follow Us</h4>
                <a href="#" className="social-icon facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div className="footer-about-us">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#"> Our Story</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">App Development</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">SEO Services</a>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div className="footer-map">
              <h3>Find Us On the Map</h3>
              <div className="map-container">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14679.746636153666!2d76.85945838748764!3d30.71920489047649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a56b227fa8ab5%3A0xf8d2c08a88a97bdf!2sChandigarh%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1674131881234!5m2!1sen!2sus"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          NextTechSolution | Reserved @ Developed by NextTechSolution
        </p>
      </div>
    </>
  );
};

export default Footer;