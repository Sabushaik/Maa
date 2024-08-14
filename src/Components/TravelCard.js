import React from 'react';
import './TravelSearch.css';
const TravelCard = ({ option }) => {
  return (
    <div className="travel-card">
      <div className="travel-details">
        <h3>{option.destination}</h3>
        <p>Operator: {option.operator}</p>
        <p>Fare: {option.fare}</p>
      </div>
    </div>
  );
};

export default TravelCard;
