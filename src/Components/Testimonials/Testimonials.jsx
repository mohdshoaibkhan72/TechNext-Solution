import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Ashish Senger",
    position: "CEO, Paisa4you",
    feedback:
      "The digital marketing team helped us achieve a 300% increase in web traffic!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mohd Saif",
    position: "CEO,PrayagTea",
    feedback: "Their social media strategy transformed our brand presence.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mark Wilson",
    position: "Founder, NGOs",
    feedback: "Their SEO services brought us to the top of search rankings.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Brown",
    position: "CMO, Healthify",
    feedback: "Their content marketing strategies brought significant growth.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Lee",
    position: "Director, FinServe",
    feedback:
      "The PPC campaigns they ran for us resulted in an incredible ROI.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Emma Green",
    position: "Owner, GreenStyle",
    feedback:
      "Thanks to their email marketing strategy, our customer retention increased significantly.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
            <p className="feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
