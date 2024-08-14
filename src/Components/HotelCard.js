import React from 'react';
import './HotelSearch.css'
const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <div className="hotel-details">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
      </div>
    </div>
  );
};

export default HotelCard;
