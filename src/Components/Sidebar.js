// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS for styling
import { FaHome,FaPhoneAlt,FaEnvelope,FaPrint, FaMagic, FaHeart, FaSearch, FaLocationArrow, FaYoutube, FaInstagram, FaGoogle, FaTwitter, FaBook, FaLock, FaUser ,FaLandmark, FaSearchLocation, FaHotel} from 'react-icons/fa'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleSidebar}>
      
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

      </div>
      <ul>
        <li> </li>
        <li></li>
        <li> <FaUser/><a href="#">Guide Profile</a></li>
        <li> <FaUser/><a href="#">Guide Analytics</a></li>
        <li> <FaUser/><a href="#">Services</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
