import React, { useState } from "react";
import "./ContactUs.css"; // Import the corresponding CSS file
import img5 from "../../../images/routesimg.jpg"; // Background image for the header

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
        <img src={img5} alt="Portfolio Background" className="header-image" />
        <div className="header-overlay">
          <nav className="nav-links">
            <p className="home-link">Home /</p>
            <p className="contactus-link">Contact Us</p>
          </nav>
        </div>
      </div>

      {/* Icons at the top */}
      <div className="top-icons">
        <i
          className="fas fa-arrow-up scroll-to-top"
          onClick={scrollToTop}
          title="Scroll to Top"
        ></i>
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
            <button className="contact-button">Chat</button>
          </div>
          <div className="card">
            <i className="fas fa-phone-alt card-icon"></i>
            <h3>Call with us</h3>
            <p>Prefer to talk? Call us anytime. 24 x 7</p>
            <button className="contact-button">Call</button>
          </div>
          <div className="card">
            <i className="fas fa-envelope card-icon"></i>
            <h3>Email with us</h3>
            <p>Have a question? Send us an email, and we'll respond shortly.</p>
            <button className="contact-button">Email</button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          <h2>Get in touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-label="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
    </>
  );
}

export default ContactUs;
