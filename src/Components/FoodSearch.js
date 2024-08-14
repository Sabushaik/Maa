import React, { useState } from 'react';
import './FoodSearch.css';
import FoodList from './FoodList';


function FoodSearch() {
    const [category, setCategory] = useState('All'); // Default category for example

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
    <div className="Foole">
      <header className="Foole-header">
        <h1 >Explore Food Items</h1>
        <select value={category} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Starters">Starters</option>
          <option value="Main Course">Main Course</option>
          <option value="Desserts">Desserts</option>
        </select>
      </header>
      <FoodList category={category} />
    </div>


    </>

  )
}

export default FoodSearch;
