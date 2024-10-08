import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 1, title: 'Starlight Scholars Guild', description: 'A training program for school and college students as well as professionals on AR, VR, MR and AI technologies.' },
  { id: 2, title: 'LunarCode Lab', description: 'Desingning and development of software products on AR,VR,MR and AI for commercial software products.' },
  { id: 3, title: 'Elemental Engineering', description: 'Creation of tailored software solutions to help businesses enhance their processes and increase client engagement.' },
  { id: 4, title: 'Wings of Wisdom', description: 'Organising workshops, seminars, and campaigns to educate the general public, students, and industries.' },
];

const Services = () => {
  const serviceRefs = useRef([]);

  useLayoutEffect(() => {
    serviceRefs.current.forEach((service, index) => {
      gsap.fromTo(service, {
        opacity: 0,
        y: 100,
        rotation: index % 2 === 0 ? 20 : -20,
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
          start: "top 150%",
          end: "bottom 0%",
          scrub: 3
        }
      });
    });
  }, []);

  return (
    <div className=' bg-gray-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-[80px] bg-opacity-5 p-1 m-5'>
      <h1 className="text-white service-name">Our Spellbound Services</h1>
      <div className="services-section">
        {services.map(({ id, title, description }, index) => (
          <div
            className={`service-item service-${index + 1}`}
            key={id}
            ref={(el) => (serviceRefs.current[index] = el)}
          >
            <h3 className="service-title league">{title}</h3>
            <p className="service-description futstat">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;