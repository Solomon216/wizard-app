// TestimonialSection.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    fetch('src\data\testimonial.json')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [testimonials]);

  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
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
