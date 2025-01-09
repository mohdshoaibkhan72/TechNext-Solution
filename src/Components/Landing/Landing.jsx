import React from "react";
import "./Landing.css";
import img1 from "../../images/banner-image-2.png";
function Landing() {
  return (
    <div className="landing-page">
      {/* Left Section: Hero Content */}
      <div className="leftdiv">
        <h1>Grow Your Business with Us</h1>
        <p>
          We specialize in web development, SEO, and app solutions to empower
          your brand and increase your online presence.
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* Right Section: Hero Image */}
      <div className="rightdiv">
        <img src={img1} alt="Professional Services" className="hero-image" />
      </div>
    </div>
  );
}

export default Landing;
