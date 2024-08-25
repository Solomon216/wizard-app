import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedTitle = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const textWrapper = titleRef.current.querySelector('.letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    const animateText = () => {
      anime.timeline({ loop: false }) // Loop set to false
        .add({
          targets: '.ml6 .letter',
          translateY: ['0.5em', 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i,
        });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateText();
        }
      },
      { threshold: 0.5 } // Animation triggers when 50% of the element is in view
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <h3 className="ml6" ref={titleRef}>
      <span className="text-wrapper nyght">
        <span className="letters ">Wizardlenz XR Studio (OPC) Private Limited is a pioneering technology company specializing in immersive and futuristic technologies such as Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR), the Metaverse, and Artificial Intelligence (AI). Our mission is to bridge the gap between these cutting-edge technologies and their practical applications in education, industry, and everyday life. We offer comprehensive training programs for students and professionals, providing placement opportunities for our graduates. Additionally, we develop innovative software products, create custom solutions for industrial clients, and promote social awareness about the transformative potential of these technologies.</span>
      </span>
    </h3>
  );
};

export default AnimatedTitle;
