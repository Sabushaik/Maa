import React, { useEffect } from 'react';
import './TransitionBoxes.css';
import {Link ,useLocation ,useNavigate} from'react-router-dom';


import Sidebar from './Sidebar';
import AnimatedLinks from './AnimatedLinks';
import img3 from "../images/img3.jpg"
import { FaHome,FaPhoneAlt,FaEnvelope,FaPrint, FaMagic, FaHeart, FaSearch, FaLocationArrow, FaYoutube, FaInstagram, FaGoogle, FaTwitter, FaBook, FaLock, FaUser ,FaLandmark, FaSearchLocation, FaHotel} from 'react-icons/fa'
import ImageSearch from './ImageSearch';
import TravelGuide from './TravelGuide';


const TransitionBoxes = () => {
  useEffect(() => {
    // This effect runs after the component mounts
    // It adds a class to trigger the animation
    const boxes = document.querySelectorAll('.boxsabu');
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('animate-in');
      }, index * 200); // Delay each box animation by 200ms
    });
  }, []);
  const location = useLocation();
const receivedData = location.state?.data;
const naviagte=useNavigate();
const handleSubmit = (event) => {
event.preventDefault();
  naviagte('/Imagesearch',  { state: { data: receivedData } });

};
  return (
    <>
   

    
    {/*<div className="transition-container">
      <div className="boxsabu small"></div>
      <div className="boxsabu medium"></div>
      
    </div>

    <div className="transition-container">
      <div className="boxsabu small"></div>
      <div className="boxsabu medium"></div>
      
    </div>


    </div>

  <div>

  <div  >   <Sidebar />     </div> */}
<div><TravelGuide/></div>
  <div className='transition-container'>
   <div className="row">
  

  
 
  
 
  {/*
  <div className="boxsabu huge " style={{marginRight:'50px'}}><img src={img3} width={'420px'} height={'420px'} style={{borderRadius:'30px'}}/></div>
 
  <div className="boxsabu large " style={{marginLeft:'auto' , padding:'10px'}}><AnimatedLinks/></div>
 
*/}
   </div>
   </div>


<div>

  <h2> Guide  {receivedData?.guideName +" "}  welcome to Guide Portal page  </h2>
  
  <h2>ur Location is {receivedData?.guideLocation}</h2>
  <h2> Here we go the Best Places  in {receivedData?.guideLocation + " "} should gain Knowledge over them </h2>


<ImageSearch/>


</div>
    </>
  );
};

export default TransitionBoxes;
