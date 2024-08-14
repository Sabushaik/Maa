import React from 'react';
import Carousel from './Carousel';

const hotelItems = [
  { id: 1, name: 'Luxury Suite', imageUrl: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', price: 500 },
  { id: 2, name: 'Standard Room', imageUrl: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', price: 150 },
  { id: 3, name: 'Deluxe Villa', imageUrl: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', price: 800 },
  { id: 4, name: 'Beach ', imageUrl: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', price: 500 },
  { id: 5, name: 'Moon', imageUrl: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', price: 150 },
  { id: 6, name: 'Lake', imageUrl: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', price: 800 },
  
  
  // Add more items as needed
];

function Random() {
  return (
    <div>
        
      <h1 style={{textAlign:'center'}}>Welcome to Our Packages Selection</h1>
      <Carousel items={hotelItems} />
    </div>
      
    
  )
}

export default Random
