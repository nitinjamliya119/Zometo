import React from 'react'

function Cards({ image, discount, name, rating, cuisines, price, deliveryTime }) {
  
  return (<>
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full sm:w-72 lg:w-80 flex flex-col">
        
      {/* Discount tag ke saath image container */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
         
        />
        {/* Discount tag, zarurat ke hisaab se dikhega */}
        {discount && (
          <div className="absolute bottom-3 left-3  text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md">
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
        {/* Place */}
        <p className="text-sm text-gray-600 mb-3 truncate">{cuisines}</p>
        {/* Price aur delivery time wala footer */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
          <span className="text-base font-light text-red-400">{price}</span>
          <span className="text-sm text-gray-500">{deliveryTime}</span>
        </div>
      </div>
    </div>
  </>);
}

export default Cards