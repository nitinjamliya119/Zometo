import React, { useState, useRef, useEffect } from 'react';

export default function TopBrand() {
  const cardsData = [
    {
      text: 'KFC',
      imageUrl: 'src/components/Photos/TopBrands/Top1.avif',
    },
    {
      text: "Tinku's",
      imageUrl: ' src/components/Photos/TopBrands/Top2.avif',
    },
    {
      text: 'Pizza Hut',
      imageUrl: 'src/components/Photos/TopBrands/Top3.avif',
    },
    {
      text: 'Oye24',
      imageUrl: 'src/components/Photos/TopBrands/Top4.avif',
    },
    {
      text: 'Apna Sweets',
      imageUrl: 'src/components/Photos/TopBrands/Top5.avif',
    },
    {
      text: 'McDonald"s',
      imageUrl: 'src/components/Photos/TopBrands/Top6.avif',
    },
    {
      text: 'Natural Ice Cream',
      imageUrl: 'src/components/Photos/TopBrands/Top7.avif',
    },
    {
      text: 'burger Kings',
      imageUrl: 'src/components/Photos/TopBrands/Top8.png',
    },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(3);
      } else if (window.innerWidth < 768) {
        setCardsPerPage(4);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(5);
      } else {
        setCardsPerPage(6);
      }
      setCurrentIndex(0);
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const cardElement = carouselRef.current.children[0];
      const cardWidth = cardElement.offsetWidth;
      const scrollAmount = cardWidth * cardsPerPage;

      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setCurrentIndex((prevIndex) => Math.min(prevIndex + cardsPerPage, cardsData.length - cardsPerPage));
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const cardElement = carouselRef.current.children[0];
      const cardWidth = cardElement.offsetWidth;
      const scrollAmount = cardWidth * cardsPerPage;

      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    
      setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
    }
  };

  return (
    <div className="  flex flex-col  font-sans ml-20">
      <div className="w-full max-w-6xl relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left ">
        Top brands for you
        </h2>

        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth py-4 rounded-xl   items-center justify-start"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2 flex flex-col items-center text-center"
              style={{ width: `${100 / cardsPerPage}%` }}
            >
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md border-2 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={card.imageUrl}
                  alt={card.text}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error"; }}
                />
              </div>
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToPrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10
                     disabled:opacity-50 disabled:cursor-not-allowed -ml-2 sm:-ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={scrollToNext}
          disabled={currentIndex >= cardsData.length - cardsPerPage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10
                     disabled:opacity-50 disabled:cursor-not-allowed -mr-2 sm:-mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Next"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}