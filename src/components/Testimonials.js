// TestimonialCard.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const testimonials = [
  {
    name: 'John Doe',
    content: 'This product is amazing! Highly recommended.',
    photo: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    name: 'Jane Smith',
    content: 'I had a fantastic experience with this service.',
    photo: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    name: 'Sam Wilson',
    content: 'Outstanding quality and support.',
    photo: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    name: 'Alice Johnson',
    content: 'A game changer for our business.',
    photo: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
];

const TestimonialCard = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="testimonial-section" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="testimonial-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '200px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: 'white',
            marginBottom: '20px',
          }}
        >
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginBottom: '15px',
            }}
          />
          <p style={{ textAlign: 'center' }}>{testimonial.content}</p>
          <h4 style={{ textAlign: 'center', marginTop: '10px' }}>{testimonial.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
