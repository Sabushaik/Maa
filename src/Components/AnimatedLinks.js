// AnimatedLinks.js

import React, { useState, useEffect } from 'react';
import './AnimatedLinks.css'; // Import CSS for styling

const AnimatedLinks = () => {
  const [links, setLinks] = useState([
    { id: 1, text: 'Link 1' },
    { id: 2, text: 'Link 2' },
    { id: 3, text: 'Link 3' },
    { id: 4, text: 'Link 4' },
    { id: 5, text: 'Link 5' }
  ]);

  //useEffect(() => {
    // Simulated function to add new links periodically (for demonstration)
//     const interval = setInterval(() => {
//       const newLink = {
//         id: Date.now(),
//         text: `Link ${links.length + 1}`
//       };
//     //  setLinks(prevLinks => [...prevLinks, newLink]);
//    // 
// }, 2000
//    ); // Add a new link every 2 seconds

//     return () => clearInterval(interval);
//   }, [links]);

  return (
    <div className="animated-links">
        <h4>Shikari Links</h4>
       
      {links.map((link, index) => (
        <div key={link.id} className={`link-item ${index % 2 === 0 ? 'new' : ''}`}>
        <marquee direction="left"  scrollamount="4"> <a href="#">{link.text}</a> </marquee> 
        </div>
      ))}
    </div>
  );
};

export default AnimatedLinks;
