import React, { useEffect, useState } from "react";
import "./Landing.css";
import img1 from "../../images/aboutus.jpeg";
import img2 from "../../images/banner-image-2.png";
import img3 from "../../images/dot-line.jpg";

const slides = [
  {
    title: "Grow Your Business with Us",
    description:
      "We specialize in web development, SEO, and app solutions to empower your brand and increase your online presence.",
    image: img1,
  },
  {
    title: "Boost Your Online Presence",
    description:
      "Our expert team will help you achieve your digital goals with cutting-edge solutions tailored to your needs.",
    image: img2,
  },
  {
    title: "Join the Digital Revolution",
    description:
      "Stay ahead of the competition by leveraging our innovative strategies for web development and digital marketing.",
    image: img3,
  },
];

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create a looped version of the slides with clones
  const extendedSlides = [
    slides[slides.length - 1], // Clone last slide at the start
    ...slides,
    slides[0], // Clone first slide at the end
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  // Move to the next slide
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Reset position after reaching the end or start
  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    }
  };

  // Handle dot navigation
  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  return (
    <div className="slider-wrapper">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="landing-page">
            <div className="leftdiv">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="cta-button">Get Started</button>
            </div>
            <div className="rightdiv">
              <img
                src={slide.image}
                alt="Professional Services"
                className="hero-image"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex - 1 === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
