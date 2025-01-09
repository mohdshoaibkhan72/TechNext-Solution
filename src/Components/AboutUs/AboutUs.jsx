import React from "react";
import "./AboutUs.css";
import poster from "../../images/AboutUs.jpeg";

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="leftside">
        <img src={poster} alt="About TechNext Solution" />
      </div>
      <div className="rightside">
        <h1>About Us</h1>
        <h2>Delivering Innovation to Drive Business Success</h2>
        <p>
          <strong>TechNext Solution</strong> is a growing software development
          company that has successfully delivered projects for{" "}
          <strong>4-5 clients</strong> across various industries. We pride
          ourselves on providing tailored, secure, and scalable solutions that
          meet your unique business needs.
        </p>
        <p>
          Our expertise spans from building dynamic web applications to mobile
          apps and enterprise-level solutions. We ensure that each product we
          deliver is user-friendly, high-performing, and reliable.
        </p>
        <p>
          By partnering with us, businesses can stay ahead of the curve with
          cutting-edge technology and dedicated support. Let us help you bring
          your ideas to life and achieve your business goals.
        </p>
        <button className="cta-button">Read More</button>
      </div>
    </div>
  );
}

export default AboutUs;
