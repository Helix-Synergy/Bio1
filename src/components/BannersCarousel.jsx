import React, { useState, useEffect } from "react";
import banner_images from "../utils/BannerCarousel"; // adjusted path

const Carousel = () => {
  const slides = Object.entries(banner_images).map(([key, image], index) => ({
    id: index + 1,
    image,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[90%] h-[130px] sm:h-[280px] md:h-[50%] mx-auto overflow-hidden rounded-3xl bg-slate-200 border border-one">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 z-30 text-white rounded-full hover:bg-black p-2 z-50"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 z-30 text-white rounded-full hover:bg-black p-2 z-50"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
