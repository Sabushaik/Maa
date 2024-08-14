import React from 'react';
import './TravelGuide.css';
import img1 from'../images/img1.jpg'
import Xub from "../images/Manali.png";

const TravelGuideGallery = () => {
  const guideImages = [
    
    'https://th.bing.com/th/id/OIP.jUmdv4L17HHHrpQjCBUT2AHaF3?w=237&h=187&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.94OZxb9xeqv6IgVrLwd2JwHaE7?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th?id=OIP.Wi8v5f6VqV0K0CZoFSZZzQHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OSK.HEROdaZq2fIEZ5NaBB7MtRpVdhguCNCDYnb3FXx-ww5v1pc&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM'
    
  ];

  return (
    <div className="gallery">
      {guideImages.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Travel Guide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default TravelGuideGallery;
