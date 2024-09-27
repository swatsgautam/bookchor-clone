import React, { useState, useEffect } from 'react'
import './Hero.css'

// Dynamically import all images from the folder using a separate variable
const images = [
    require('../../assets/images/hero-1.webp'),
    require('../../assets/images/hero-2.webp'),
    require('../../assets/images/hero-3.webp'),
    require('../../assets/images/hero-4.webp'),
    require('../../assets/images/hero-5.webp'),
    require('../../assets/images/hero-6.webp'),
  ];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoCarousel] = useState(true);

  // Go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto carousel functionality
  useEffect(() => {
    if (isAutoCarousel) {
      const interval = setInterval(goToNext, 5000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoCarousel]);

  return (
    <div className="hero-container">
       <button className="carousel-btn prev-btn" onClick={goToPrev}>
          <i className='fa fa-chevron-left'></i>
        </button>
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      </div>
        <button className="carousel-btn next-btn" onClick={goToNext}>
        <i className='fa fa-chevron-right'></i>
        </button>
      </div>
  )
}

export default Hero
