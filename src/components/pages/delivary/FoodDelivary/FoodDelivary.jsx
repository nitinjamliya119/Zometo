import React from 'react';

export default function FoodDelivary() {
  // Khaane ke items ka sample data
  const foodItems = [
    {
      id: 1,
      image: 'src/components/Photos/FoodDelivary/Food1.avif', // Apna Sweets ke liye placeholder image
      discount: null,
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Desserts, Ice Cream, Juice...',
      price: '₹150 for one',
      deliveryTime: '16 min',
    },
    {
      id: 2,
      image: 'src/components/Photos/FoodDelivary/Food2.avif', // Ravi Alpahar ke liye placeholder image
      discount: '50% OFF',
      name: 'Ravi Alpahar',
      rating: '4.2',
      cuisines: 'Street Food, Fast Food',
      price: '₹150 for one',
      deliveryTime: '13 min',
    },
    {
      id: 3,
      image: 'src/components/Photos/FoodDelivary/Food3.avif', // North Indian King ke liye placeholder image
      discount: '₹100 OFF',
      name: 'North Indian King',
      rating: '4.1',
      cuisines: 'North Indian, Chinese',
      price: '₹200 for one',
      deliveryTime: '29 min',
    },
  ];

  return ( <> 
        
    
     
  
    <div className="  p-4 flex flex-wrap justify-center items-center gap-14 font-inter">
      {/* Food items data par loop karke har ek ke liye FoodCard render karo */}
      
      {foodItems.map((item) => (
        <FoodCard
          key={item.id}
          image={item.image}
          discount={item.discount}
          name={item.name}
          rating={item.rating}
          cuisines={item.cuisines}
          price={item.price}
          deliveryTime={item.deliveryTime}
        />
      ))}
    </div>
     
    
    
    </>
  );
}

const FoodCard = ({ image, discount, name, rating, cuisines, price, deliveryTime }) => {
  return (<>
  
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden w-80% sm:w-72 lg:w-80 flex flex-col ">
      
      {/* Discount tag ke saath image container */}
      <div className="relative w-full h-44 overflow-hidden">
       
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          // Image load hone mein error ho toh yeh fallback use hoga
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/300x180/CCCCCC/333333?text=Image+Error';
          }}
        />
        {/* Discount tag, zarurat ke hisaab se dikhega */}
        {discount && (
          <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md">
            {discount}
          </div>
        )}
      </div>

      {/* Card ki details wala section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Name aur rating wala header */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
          <div className="flex items-center bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-md">
            <svg
              className="w-4 h-4 mr-1 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        {/* Cuisines/Category */}
        <p className="text-sm text-gray-600 mb-3 truncate">{cuisines}</p>

        {/* Price aur delivery time wala footer */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
          <span className="text-base font-semibold text-gray-800">{price}</span>
          <span className="text-sm text-gray-500">{deliveryTime}</span>
        </div>
      </div>
    </div>
    
    </>
  );
};


