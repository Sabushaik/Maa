import React, { useState } from 'react';
import CarouselItems2 from './CarouselItems2';
import './Carousel.css';

const Carousel2 = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <>
    <center>
    <div className="carousel2" style={{alignContent:'center',marginRight:'50px',}}>
        
      {items.map((item) => (
        <CarouselItems2
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          onSelect={handleSelectItem}
        /> 
      ))}
     <div className="selected-items">
        <h2>Selected Guides</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.name} -${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
          </div> 
    </div>
    </center>
    </>
  );
};

export default Carousel2;
