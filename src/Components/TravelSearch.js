import React from 'react'

import { useState } from 'react';
import './TravelSearch.css';
import TravelOptions from './TravelOptions';
function TravelSearch() {

    const [mode, setMode] = useState('bus'); // Default mode for example

    const handleModeChange = (event) => {
      setMode(event.target.value);
    };
  
  return (
   <>

<div className="TApp">
      <header className="TApp-header">
        <h1>Explore Travel Options</h1>
        <select value={mode} onChange={handleModeChange}>
          <option value="bus">Bus</option>
          <option value="auto">Auto</option>
          <option value="flight">Flight</option>
        </select>
      </header>
      <TravelOptions mode={mode} />
    </div>
   </>


  )
}

export default TravelSearch
