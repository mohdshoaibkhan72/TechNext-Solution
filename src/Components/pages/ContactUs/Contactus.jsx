import React, { useState } from "react";
import "./Contactus.css"; // Import the corresponding CSS file
import img5 from "../../../images/contactus.jpg";
import img4 from "../../../images/routesimg.jpg"; // Background image for the header

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Header Section */}
      <div className="header-section">
        <img src={img4} alt="Portfolio Background" className="header-image" />
        <div className="header-overlay">
          <nav className="nav-links">
            <p className="home-link">Home /</p>
            <p className="contactus-link">Contact Us</p>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-us">
        {/* Heading */}
        <h1>If you have any queries, feel free to contact us</h1>

        {/* Contact Options Cards */}
        <div className="contact-cards">
          <div className="card">
            <i className="fas fa-comment-alt card-icon"></i>
            <h3>Chat with us</h3>
            <p>Need assistance? We're here to chat with you.</p>
            <button className="contact-button">
              <a
                href="https://api.whatsapp.com/send?phone=+917310249234&text=Hello! I need assistance."
                target="_blank"
                rel="noopener noreferrer"
              >
                CHAT
              </a>
            </button>
          </div>
          <div className="card">
            <i className="fas fa-phone-alt card-icon"></i>
            <h3>Call with us</h3>
            <p>Prefer to talk? Call us anytime. 24 x 7</p>
            <button className="contact-button">
              <a href="tel:+917310249234">CALL</a>
            </button>
          </div>
          <div className="card">
            <i className="fas fa-envelope card-icon"></i>
            <h3>Email with us</h3>
            <p>Have a question? Send us an email, and we'll respond shortly.</p>
            <button className="contact-button">
              <a href="mailto:info@technextsolution.com">Email</a>
            </button>
          </div>
        </div>

        {/* Contact Form and Image Section */}
        <div className="form-image-section">
          {/* Contact Image */}
          <div className="contact-image">
            <img src={img5} alt="Contact" />
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  aria-label="Enter your name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  aria-label="Enter your email"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  aria-label="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  aria-label="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
