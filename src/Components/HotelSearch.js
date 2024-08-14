import React from 'react'
import HotelList from './HotelList';
import './HotelSearch.css'
import { useState } from 'react';


function HotelSearch() {

    const [location, setLocation] = useState(''); // Default location for example

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
<div className="Hole">
      <header className="Hole-header">
        <h1>Explore Hotels</h1>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location..."
        />
      </header>
      <HotelList location={location} />
    </div>

    </>
  )
}

export default HotelSearch
