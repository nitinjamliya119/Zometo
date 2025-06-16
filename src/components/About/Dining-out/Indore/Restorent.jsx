import React from 'react'
import Cards from './Cards';

function Restorent() {
  
     // Khaane ke items ka sample data
  const foodItems = [
    {
      id: 1,
      image: 'src/components/Photos/R-c-1.webp',
      discount: null,
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-2.avif',
      discount: "Flate 10% OFF",
      name: 'Apna Sweets',
      rating: '3.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-3.avif',
      discount:"Flate 15% OFF",
      name: 'Apna Sweets',
      rating: '2.9',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-4.avif',
      discount: "Flate 20% OFF",
      name: 'Apna Sweets',
      rating: '4.8',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-5.avif',
      discount: "Flate 25% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-6.avif',
      discount: "Flate 30% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-7.avif',
      discount:"Flate 19% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-8.avif',
      discount: "Flate 40% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-9.avif',
      discount:"Flate 29% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-10.avif',
      discount: "Flate 30% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-11.avif',
      discount: "Flate 17% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-12.avif',
      discount:"Flate 13% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-13.avif',
      discount:"Flate 17% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },
    {
      id: 1,
      image: 'src/components/Photos/R-c-14.avif',
      discount: "Flate 27% OFF",
      name: 'Apna Sweets',
      rating: '4.3',
      cuisines: 'Indore...',
      price: 'Opens soon',
      deliveryTime: '16 km',
    },

   
  ];
  return (<>
    

    <div className="w-full ml-20 max-w-6xl relative">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left px-4">Restaurants in Indore</h1>
    </div>
        
        
        <div  className=" p-4 w-60% flex flex-wrap justify-center items-center gap-6 font-inter">
          {foodItems.map((item) => (
        <Cards
          key={index}
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
     
   
    
  </>);
}


export default Restorent