// TestimonialSection.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const cardsRef = useRef([]);

  const data = [
    {
      "id": 1,
      "name": "John Doe",
      "title": "CEO, Company A",
      "testimonial": "This service has been amazing! I've never experienced such great support.",
      "image": "path/to/image1.jpg"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "title": "Marketing Director, Company B",
      "testimonial": "The product exceeded our expectations and the team was very professional.",
      "image": "path/to/image2.jpg"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "title": "CTO, Company C",
      "testimonial": "Highly recommend this company for their innovative solutions and customer service.",
      "image": "path/to/image3.jpg"
    }
  ]


  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {data.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="testimonial-card"
            ref={el => (cardsRef.current[index] = el)}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
