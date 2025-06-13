import React, { useState, useRef, useEffect } from 'react';


function FinalCollection() {
  const cardsData = [
    {
      title: 'Romantic Dining Places',
      places: '15 Places',
      imageUrl: 'src/components/Photos/C-1.avif',
    },
    {
      title: 'Great Cafes',
      places: '25 Places',
      imageUrl: 'src/components/Photos/C-2.avif',
    },
    {
      title: 'Local Favourite Places',
      places: '13 Places',
      imageUrl: 'src/components/Photos/C-3.avif',
    },
    {
      title: 'Pan-Asian Restaurants',
      places: '28 Places',
      imageUrl: 'src/components/Photos/C-4.avif',
    },
    {
      title: 'Dessert Spots',
      places: '10 Places',
      imageUrl: 'src/components/Photos/C-5.avif',
    },
    {
      title: 'Fast Food Joints',
      places: '30 Places',
      imageUrl: 'src/components/Photos/C-6.avif',
    },
    {
      title: 'medium Food Joints',
      places: '70 Places',
      imageUrl: 'src/components/Photos/C-7.avif',
    },
    {
      title: 'slow Food Joints',
      places: '90 Places',
      imageUrl: 'src/components/Photos/C-8.avif',
    },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
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
    <>
    <div className="  flex flex-col items-center justify-center p-4 font-sans text-gray-900 dark:text-gray-100  bg-gray-100">
      <div className="w-full max-w-6xl relative">
     <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-left px-4">Collections</h2> 
      <div className="font-normal text-xl text-gray-500 pl-5">Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</div>
     </div>
     

    </div>
  
    <div className=" bg-gray-100 flex items-center justify-center font-sans w-60% h-30%  mt-none">
      <div className="w-full max-w-6xl relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth py-4 rounded-xl  bg-transparent">
          {cardsData.map((card, index) => (
            <div
            key={index}
              className="flex-shrink-0 p-2"
              style={{ width: `${100 / cardsPerPage}%` }}
              >
              <div
                className="relative w-full h-80 rounded-xl overflow-hidden shadow-md group transform transition-transform duration-300 "
                >
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 "
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/000000?text=Image+Error"; }}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-sm opacity-90">{card.places} &gt;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        <button
          onClick={scrollToPrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10
          disabled:opacity-50 disabled:cursor-not-allowed -ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Previous"
          >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={scrollToNext}
          disabled={currentIndex >= cardsData.length - cardsPerPage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10
          disabled:opacity-50 disabled:cursor-not-allowed -mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Next"
          >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  
          
          </>);
};

export default FinalCollection