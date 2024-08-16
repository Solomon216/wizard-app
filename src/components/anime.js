import React, { useState, useEffect } from 'react';
import './ImageMorph.css'; // Assuming you add the CSS below in this file

const ImageMorph = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://www.espncricinfo.com/cricketers/virat-kohli-253802',
    'https://www.hindustantimes.com/cricket/players/virat-kohli-3993',
    'https://en.wikipedia.org/wiki/Virat_Kohli',
    'https://en.wikipedia.org/wiki/Virat_Kohli',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Morphing Image ${index + 1}`}
          className={`image ${currentImage === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ImageMorph;
