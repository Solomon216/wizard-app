import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 1, title: 'Web Development', description: 'Building responsive and modern websites.' },
  { id: 2, title: 'Mobile Development', description: 'Creating cross-platform mobile applications.' },
  { id: 3, title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces.' },
  { id: 4, title: 'AI & Machine Learning', description: 'Integrating AI solutions into your business.' },
];

const Services = () => {
  const serviceRefs = useRef([]);

  useLayoutEffect(() => {
    serviceRefs.current.forEach((service, index) => {
      gsap.fromTo(service, {
        opacity: 0,
        y: 100,
        rotation: index % 2 === 0 ? 15 : -15,
        scale: 0.8,
      }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: service,
          start: "top 80%",
          end: "bottom 10%",
          scrub: 1,
          markers: true
        }
      });
    });
  }, []);

  return (
    <div className="services-section">
      {services.map(({ id, title, description }, index) => (
        <div
          className={`service-item service-${index + 1}`}
          key={id}
          ref={(el) => (serviceRefs.current[index] = el)}
        >
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
