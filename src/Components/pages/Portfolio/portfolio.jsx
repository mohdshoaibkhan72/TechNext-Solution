import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../../../images/praygtea.png";
import img2 from "../../../images/image.png";
import img3 from "../../../images/paisa4you.png";
import img4 from "../../../images/EMS.png";
import img5 from "../../../images/routesimg.jpg";

const projects = [
  {
    title: "TechNext Solution",
    image: img2,
    liveLink: "https://technextsolution.com/",
    type: "Fullstack", // Type of project
  },
  {
    title: "Paisa4you",
    image: img3,
    liveLink: "https://www.paisa4you.com/",
    type: "Fullstack", // Type of project
  },
  {
    title: "Employee Management System",
    image: img4,
    liveLink: "https://ems-hr.vercel.app/",
    type: "Fullstack", // Type of project
  },
  {
    title: "Prayag Tea",
    image: img1,
    liveLink: "https://prayagtea.com/",
    type: "Design", // Type of project
  },
];

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState("All");

  // Filter projects based on selected type
  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <div className="portfolio-container">
      {/* Full-width image and navigation */}
      <div className="header-section">
        <img src={img5} alt="Portfolio Background" className="header-image" />
        <div className="header-overlay">
          <nav className="nav-links">
            <p className="home-link">Home /</p>
            <p className="portfolio-link">Portfolio</p>
          </nav>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={selectedType === "All" ? "active" : ""}
          onClick={() => setSelectedType("All")}
        >
          All Projects
        </button>
        <button
          className={selectedType === "Fullstack" ? "active" : ""}
          onClick={() => setSelectedType("Fullstack")}
        >
          Fullstack
        </button>
        <button
          className={selectedType === "Design" ? "active" : ""}
          onClick={() => setSelectedType("Design")}
        >
          Design
        </button>
      </div>

      {/* Portfolio Content */}
      <div className="portfolio-section">
        <h2>My Portfolio</h2>
        <p>
          Here are some of the projects I've worked on for my clients across
          various industries.
        </p>
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="image-container">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <div className="links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
