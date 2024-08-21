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
          translateY: ['1.1em', 0],
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
    <h1 className="ml6" ref={titleRef}>
      <span className="text-wrapper">
        <span className="letters">Beautiful Qu j j j jjjj j  fdjdjbd dndndd dkd dfdkd fdkd fkdf dfkd dkd dkfdffkdf k estions</span>
      </span>
    </h1>
  );
};

export default AnimatedTitle;
