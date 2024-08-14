import React from 'react';
import TravelCard from './TravelCard';
import './TravelSearch.css';

const travelData = {
  bus: [
    { id: 1, destination: 'Manali', operator: 'HRTC', fare: '500 INR' },
    { id: 2, destination: 'Shimla', operator: 'HRTC', fare: '400 INR' },
    { id: 3, destination: 'Dharamshala', operator: 'HRTC', fare: '600 INR' },
  ],
  auto: [
    { id: 4, destination: 'Local', operator: 'Local Autos', fare: 'Variable' },
    { id: 5, destination: 'City Tour', operator: 'Local Autos', fare: 'Variable' },
  ],
  flight: [
    { id: 6, destination: 'Delhi', operator: 'IndiGo', fare: '2500 INR' },
    { id: 7, destination: 'Mumbai', operator: 'Air India', fare: '3000 INR' },
    { id: 8, destination: 'Bangalore', operator: 'SpiceJet', fare: '2800 INR' },
  ],
};

const TravelOptions = ({ mode }) => {
  const options = travelData[mode];

  return (
    <div className="travel-options">
      {options.map(option => (
        <TravelCard key={option.id} option={option} />
      ))}
    </div>
  );
};

export default TravelOptions;
