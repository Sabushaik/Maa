import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.css';

const CarouselItem = ({ id, imageUrl, name, price, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onSelect({ id, name, price });
  };

  return (
    <div className={`Sacarousel-item ${selected ? 'selected' : ''}`}>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <div className="item-name">{name}</div>
        <div className="item-price">${price.toFixed(2)}</div>
        <button onClick={handleSelect}>
          {selected ? 'Remove' : 'Select'}
        </button>
        <Link to={`/buy`} className="buy-link">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
