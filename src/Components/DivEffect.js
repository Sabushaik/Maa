import React, { useState } from 'react';
import './DivEffect.css';
const DivEffect = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      <div className={`transition-div ${isVisible ? 'visible' : ''}`}>
        This is a div block with a transition effect.
      </div>
    </div>
  );
};

export default DivEffect;
