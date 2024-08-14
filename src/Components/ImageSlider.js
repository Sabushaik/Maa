import React, { useRef } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  const scrollNext = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      const scrollAmount = containerWidth / images.length;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      const scrollAmount = containerWidth / images.length;
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  // Automatically scroll to the next image every few seconds
  const autoScroll = () => {
    setInterval(() => {
      scrollNext();
    }, 3000); // Adjust interval (in milliseconds) as needed
  };

  // Start auto scrolling when component mounts
  React.useEffect(() => {
    autoScroll();
  }, []);

  const renderImages = () => {
    return images.map((image, index) => (
      <div key={index} className="image-slide">
        <img src={image.url} alt={image.caption} />
        <p className="caption">{image.caption}</p>
      </div>
    ));
  };

  return (
    <div className="image-slider" ref={sliderRef}>
      <div className="image-container">
        {renderImages()}
      </div>
    </div>
  );
};

export default ImageSlider;
