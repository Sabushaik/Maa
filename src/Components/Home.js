import React from 'react';
import Navbar from './Navbar';
import Divblock from './Divblock';
import Images from './Images';
import Mycarousel from './Mycarousel';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import DivEffect from './DivEffect';
import'./Home.css';
import img1 from "../images/img1.jpg"
import img2 from"../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img5 from "../images/img5.jpg"

import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpeg"
import img7 from "../images/img7.jpg"
import TransitionBoxes from './TransitionBoxes';
import Sidebar from './Sidebar';
import {useLocation} from'react-router-dom';

export default function Home() {
  const location = useLocation();
  const receivedData = location.state?.data;

  const[mode, setmode]=useState('light');

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  useEffect(() => {
    // This effect runs after the component mounts
    // It adds a class to trigger the animation
    const boxes = document.querySelectorAll('.boxMan');
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('animate-in');
      }, index * 200); // Delay each box animation by 200ms
    });
  }, []);


  return (
    <div  style={{display:'flex' ,flexDirection:'column'}}>
       <Navbar   mode={mode} toggleMode={toggleMode}/>
       
     
     
    

     
    
    <Divblock />
    

   
   

    
<div className="Tc">

 
 <div className="boxMan small"><Link to="/Food"     ><img src={img7} width={'200px'} height={'200px'}  style={{borderRadius:'10px' ,boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/>
 </Link> 
  <h3 style={{position: 'relative', left: '50px'}}>Food</h3></div>
 
  <div className="boxMan medium">
<a href="https//www.google.com/" >   <img src={img5}  width={'200px'} height={'200px'} style={{borderRadius:'10px' , boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/>
</a> <h3 style={{position:'relative' ,left:'50px'}} >Globe</h3></div>
  
  <div className="boxMan small">  <Link to="/Hotel">
    <img src={img8}  width={'200px'} height={'200px'} style={{borderRadius:'10px',boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/>
    </Link>
     <h3 style={{position:'relative' ,left:'50px'}}> Hotel</h3></div>

  <div className="boxMan medium">
  <Link to="/Travel"> <img src={img9} width={'200px'} height={'200px'} style={{borderRadius:'10px',boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/> </Link> 
     <h3 style={{position:'relative',left:'50px' , marginBottom: '0.5rem'}}>Transport</h3></div>
  
</div>




<div className="my-2">
    
<div  className="my-4"><center > <h1>Our Travelling Packages </h1> </center> </div>

</div>

 <Images/>

 

<Footer/>


      
    </div>
  )


}



