// ImageSearch.js

import React, { useState } from 'react';
import './ImageSearch.css'; // Import CSS for styling
import {useLocation} from'react-router-dom';

const ImageSearch = () => {
    const location = useLocation();
    const receivedData = location.state?.data;

   
  const [query, setQuery] = useState(receivedData?.guideLocation);
  const [images, setImages] = useState([]);
  
  
  
  const apiKey = 'AIzaSyBTRZz2WE2JRTRVB0y53RJIcw5Qln2-fnI'; // Replace with your Google Custom Search API Key
  const searchEngineId = '8228fa58b83354886'; // Replace with your Custom Search Engine ID

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${query}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImages(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="image-search">
      <form  className="formclass" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter search keyword"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="image-results">
        {images.map((image, index) => (
          <img key={index} src={image.link} alt={image.title} />
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
