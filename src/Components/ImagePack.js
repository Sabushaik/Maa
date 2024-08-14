import React from 'react';
import ImageSlider from './ImageSlider';
import img1 from '../images/img1.jpg'

function ImagePack() {
  const images = [
    { url: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', caption: '3999/- Pacakge' },
    { url: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain' , caption: ' 4999/-Package' },
    { url: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', caption: ' 5999/- Package' },
    { url: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', caption: '7999 /- Package' },
    { url: 'https://th.bing.com/th/id/OIP.nIurcJiPjJEceVPawVldYwHaE8?rs=1&pid=ImgDetMain', caption: ' 10000/- Pacakge' },
    // Add more images as needed
  ];

  return (
    <div>
      <h2>Our Manali Packages</h2>
      <ImageSlider images={images} />
    </div>
  );
}

export default ImagePack;
