import React, { useState, useEffect, useRef } from 'react';

export function Slider({ sliderImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleTransitionEnd = () => setIsTransitioning(false);
    const slider = sliderRef.current;
    slider?.addEventListener('transitionend', handleTransitionEnd);
    return () => slider?.removeEventListener('transitionend', handleTransitionEnd);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      );
    }
  };

  const goToSlide = () => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div 
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-md z-10 hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-md z-10 hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

