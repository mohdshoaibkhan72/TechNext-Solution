import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AboutUs.css";
import poster from "../../images/AboutUs.jpeg";
import img5 from "../../images/routesimg.jpg";

function AboutUs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAboutUsPage = pathname === "/aboutus";

  const content = (
    <>
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
        We specialize in building dynamic web applications, mobile apps, and
        enterprise-level solutions to cater to the specific needs of our
        clients. Our dedicated team ensures seamless integration and innovation
        in every project we deliver.
      </p>
      <p>
        Our mission is to empower businesses by leveraging technology to drive
        growth and improve efficiency. We prioritize security, scalability, and
        user experience in every solution.
      </p>
    </>
  );

  return (
    <>
      {isAboutUsPage && (
        <div className="header-section">
          <img src={img5} alt="Portfolio Background" className="header-image" />
          <div className="header-overlay">
            <nav className="nav-links">
              <p className="home-link">Home /</p>
              <p className="portfolio-link">About Us</p>
            </nav>
          </div>
        </div>
      )}

      <div className="aboutus">
        <div className="leftside">
          <img src={poster} alt="About TechNext Solution" />
        </div>
        <div className="rightside">
          {content}

          {/* Show additional paragraphs only on the '/aboutus' route */}
          {isAboutUsPage && (
            <>
              <p>
                With a customer-centric approach, we focus on long-term
                partnerships that contribute to our client's success. We are
                constantly evolving to stay ahead of technological advancements
                and industry trends.
              </p>
            </>
          )}

          {/* Show 'Read More' button only if NOT on the '/aboutus' route */}
          {!isAboutUsPage && (
            <button className="cta-button" onClick={() => navigate("/aboutus")}>
              Read More
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
