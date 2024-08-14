import React from 'react';

import './FoodSearch.css';
const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <div className="food-details">
        <h3>{food.name}</h3>
        <p>{food.category}</p>
      </div>
    </div>
  );
};

export default FoodCard;
