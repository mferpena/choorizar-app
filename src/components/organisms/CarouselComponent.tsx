import { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    "https://images.squarespace-cdn.com/content/v1/6390ce64f737cc2975e77d5c/e7a05e19-b17c-40d6-b1c0-c37fd94eed05/Shows-UglyAmericans-120722.png?format=750w",
    "https://images.squarespace-cdn.com/content/v1/6390ce64f737cc2975e77d5c/3659c81f-46a8-4cab-9ea7-1fd9931bf081/Shows-TheJellies-120722.png?format=750w",
    "https://images.squarespace-cdn.com/content/v1/6390ce64f737cc2975e77d5c/f46ed482-601c-4335-baa0-1581c1c68642/Shows-Superjail-120722.png?format=750w",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              className="w-full h-[350px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
