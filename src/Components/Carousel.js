import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="carousel">
      {items.map((item) => (
        <CarouselItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          onSelect={handleSelectItem}
        />
      ))}
   {/*  <div className="selected-items">
        <h2>Selected Items</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
          </div> */}
    </div>
  );
};

export default Carousel;
