import React, { useState, useRef, useEffect } from 'react';



export default function TopBrand() {
   // Yeh saare circular cards ka data hai, jisme image ka URL aur niche ka text hai.
  // This is the data for all the circular cards, containing image URL and the text below.
  const cardsData = [
    {
      text: 'KFC',
      imageUrl: 'src/components/Photos/TopBrands/Top1.avif', // Thali ke liye placeholder
    },
    {
      text: "Tinku's",
      imageUrl: ' src/components/Photos/TopBrands/Top2.avif', // Burger ke liye placeholder
    },
    {
      text: 'Pizza Hut',
      imageUrl: 'src/components/Photos/TopBrands/Top3.avif', // Veg Meal ke liye placeholder
    },
    {
      text: 'Oye24',
      imageUrl: 'src/components/Photos/TopBrands/Top4.avif', // Biryani ke liye placeholder
    },
    {
      text: 'Apna Sweets',
      imageUrl: 'src/components/Photos/TopBrands/Top5.avif', // Cake ke liye placeholder
    },
    {
      text: 'McDonald"s',
      imageUrl: 'src/components/Photos/TopBrands/Top6.avif', // North Indian ke liye placeholder
    },
    {
      text: 'Natural Ice Cream',
      imageUrl: 'src/components/Photos/TopBrands/Top7.avif', // Ek aur card
    },
    {
      text: 'burger Kings',
      imageUrl: 'src/components/Photos/TopBrands/Top8.png', // Ek aur card
    },
  ];

  // carouselRef: Yeh DOM element (carousel container) ko reference karne ke liye hai.
  // carouselRef: This is to reference the DOM element (carousel container).
  const carouselRef = useRef(null);
  // currentIndex: Yeh track karta hai ki abhi kaunsa card sabse pehle dikh raha hai.
  // currentIndex: This tracks which card is currently visible at the beginning.
  const [currentIndex, setCurrentIndex] = useState(0);
  // cardsPerPage: Yeh decide karta hai ki ek baar mein kitne cards dikhenge (responsive).
  // cardsPerPage: This decides how many cards will be visible at once (responsive).
  const [cardsPerPage, setCardsPerPage] = useState(6); // Desktop ke liye default 6 circular items

  // useEffect: Jab component mount hota hai ya window resize hota hai, tab yeh run hota hai.
  // Screen size ke hisaab se 'cardsPerPage' ko adjust karta hai.
  // useEffect: This runs when the component mounts or when the window resizes.
  // It adjusts 'cardsPerPage' based on screen size.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Chhote screens (jaise mobile) ke liye
        setCardsPerPage(3); // Mobile par 3 circular items dikhenge
      } else if (window.innerWidth < 768) { // Small tablet ke liye
        setCardsPerPage(4); // Small tablet par 4 circular items
      } else if (window.innerWidth < 1024) { // Medium screens (jaise tablet) ke liye
        setCardsPerPage(5); // Tablet par 5 circular items
      } else { // Bade screens (jaise desktop) ke liye
        setCardsPerPage(6); // Desktop par 6 circular items
      }
      // Jab cardsPerPage change ho, toh currentIndex ko reset kar do taaki scrolling theek rahe.
      // When cardsPerPage changes, reset currentIndex to ensure scrolling remains correct.
      setCurrentIndex(0);
      // Carousel ko start par scroll kar do agar resize hua hai.
      // Scroll the carousel to the start if resized.
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Component load hone par initial value set karne ke liye

    // Cleanup function: Jab component unmount ho, tab event listener remove kar do.
    // Cleanup function: When the component unmounts, remove the event listener.
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means yeh sirf ek baar mount par run hoga aur resize par bhi.

  // scrollToNext: Aage ke cards par scroll karne ka function.
  // scrollToNext: Function to scroll to the next set of cards.
  const scrollToNext = () => {
    // Sure karein ki carouselRef aur uske children available hain.
    // Ensure that carouselRef and its children are available.
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const cardElement = carouselRef.current.children[0];
      // Ek card ki poori width (padding ke saath) nikalo.
      // Get the full width of one card element including its padding.
      const cardWidth = cardElement.offsetWidth;
      // Scroll amount calculate karo taaki naye 'cardsPerPage' dikh sakein.
      // Calculate scroll amount to show a new set of 'cardsPerPage'.
      const scrollAmount = cardWidth * cardsPerPage;

      // scrollBy use karo smooth scrolling ke liye.
      // Use scrollBy for smooth scrolling.
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // currentIndex ko update karo taaki button disabling theek se kaam kare.
      // Update currentIndex to reflect the new starting card for button disabling.
      setCurrentIndex((prevIndex) => Math.min(prevIndex + cardsPerPage, cardsData.length - cardsPerPage));
    }
  };

  // scrollToPrev: Peechhe ke cards par scroll karne ka function.
  // scrollToPrev: Function to scroll to the previous set of cards.
  const scrollToPrev = () => {
    // Sure karein ki carouselRef aur uske children available hain.
    // Ensure that carouselRef and its children are available.
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const cardElement = carouselRef.current.children[0];
      const cardWidth = cardElement.offsetWidth;
      // Scroll amount calculate karo taaki 'cardsPerPage' wapas ja sakein.
      // Calculate scroll amount to go back by a set of 'cardsPerPage'.
      const scrollAmount = cardWidth * cardsPerPage;

      // scrollBy use karo smooth scrolling ke liye.
      // Use scrollBy for smooth scrolling.
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

      // currentIndex ko update karo taaki button disabling theek se kaam kare.
      // Update currentIndex to reflect the new starting card for button disabling.
      setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
    }
  };

  return (
    // Poore page ka container, center mein align karne ke liye.
    // Container for the entire page, to align it in the center.
    <div className="  flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl relative">
        {/* Carousel Title: Naya title jo image mein dikh raha hai. */}
        {/* Carousel Title: The new title visible in the image. */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left px-4">
        Top brands for you
        </h2>

        {/* Carousel Container: Yahi woh div hai jisme cards hain aur jo scroll hoga. */}
        {/* Carousel Container: This is the div that contains cards and will be scrolled. */}
        <div
          ref={carouselRef}
          // overflow-x-hidden: horizontal scrolling ko hide karta hai.
          // scroll-smooth: smooth scrolling effect deta hai.
          className="flex overflow-x-hidden scroll-smooth py-4 rounded-xl   items-center justify-start"
        >
          {/* cardsData array par loop chalakar har card render kar rahe hain. */}
          {/* Looping over the cardsData array to render each card. */}
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2 flex flex-col items-center text-center"
              // Har card ki width ko dynamically set kar rahe hain 'cardsPerPage' ke hisaab se.
              // Setting each card's width dynamically based on 'cardsPerPage'.
              style={{ width: `${100 / cardsPerPage}%` }}
            >
              {/* Card Item: Har individual circular card ka container. */}
              {/* Card Item: Container for each individual circular card. */}
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md border-2 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                {/* Image: Circular card ke andar ki image. */}
                {/* Image: The image inside the circular card. */}
                <img
                  src={card.imageUrl}
                  alt={card.text}
                  className="w-full h-full object-cover"
                  // onError: Agar image load na ho paye toh yeh fallback image dikhayega.
                  // onError: If the image fails to load, it will display this fallback image.
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error"; }}
                />
              </div>
              {/* Card Text: Image ke niche ka text. */}
              {/* Card Text: The text below the image. */}
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-700">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows: Aage aur peechhe jane ke buttons. */}
        {/* Navigation Arrows: Buttons to go forward and backward. */}
        {/* Previous Button: Peechhe jane ka button. */}
        {/* Previous Button: Button to go backward. */}
        <button
          onClick={scrollToPrev}
          // disabled: Agar pehle card par hain toh button disable kar do.
          // disabled: Disable button if at the beginning of the carousel.
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10
                     disabled:opacity-50 disabled:cursor-not-allowed -ml-2 sm:-ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Next Button: Aage jane ka button. */}
        {/* Next Button: Button to go forward. */}
        <button
          onClick={scrollToNext}
          // disabled: Agar aakhri cards par hain toh button disable kar do.
          // disabled: Disable button if at the end of the carousel.
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