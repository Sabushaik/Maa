import './App.css';
import Footer from './Components/Footer';
import Mycarousel from './Components/Mycarousel';
import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  , Link } from 'react-router-dom';
import Links from './Components/Links';
import Alert from './Components/Alert';
import ClippedDrawer from './Components/PersistentDrawerRight';
import PersistentDrawerRight from './Components/PersistentDrawerRight';
import Divblock from './Components/Divblock';
import Images from './Components/Images';
import SignupForm from './Components/SignupForm';
import Home from './Components/Home';
import HomeMain from './Components/HomeMain';
import About1 from './Components/About1';
import Success from './Components/Success';
import Login from './Components/Login';
import LoginSuccessful from './Components/LoginSuccessful';
import VisitorPage from './Components/VisitorPage';
import LoginForm from './Components/LoginForm';
import GuideSignupForm from './Components/GuideSignupForm';
import GSuccess from './Components/GSuccess';
import UserSignS from './Components/UserSignS';
import TransitionBoxes from './Components/TransitionBoxes';
import ImageSearch from './Components/ImageSearch';
import Manali from './Components/Manali';
import KeralaPage from './Components/KeralaPage';
import GoaPage from './Components/GoaPage';
import GujarathPage from './Components/GujarathPage';
import ChennaiPage from './Components/ChennaiPage';
import KashmirPage from './Components/KashmirPage';
import HotelSearch from './Components/HotelSearch';
import FoodSearch from './Components/FoodSearch';
import TravelSearch from './Components/TravelSearch';
import GuideSign from './Components/GuideSign';
import PaymentPage from './Components/PaymentPage';
import Thanks from './Components/Thanks';
import PackageBuy from './Components/PackageBuy';
import ThankYouPage from './Components/ThankyouPage';
import AboutShikari from './Components/AboutShikari';




function App() {

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
  return (
   <>

   
 
 <Router>

  
  <Routes>
  

  <Route path="shikari" element={<Home/>}/>
  <Route path="home"  element={<Home/>}/>
  <Route path="/" element={<HomeMain/>} />

  <Route path="/details" element={<Success/>}/>
  <Route path="/Gdetails" element={<GSuccess/>}/>
  <Route exact path="/sign" element={<SignupForm/>}/>
  
  
    <Route path="/Login" element={<Login mode={mode} toggleMode={toggleMode}/>}/>
   <Route path="/Main"  element={<Home/>} />
   <Route path="/Conform" element={<VisitorPage/>}/>
    <Route path="/GLog" element={<LoginForm/>}/>
   <Route  exact path="/text"  element={<AboutShikari/>} />
   <Route path="/GSign" element={<GuideSignupForm/>}/>
   <Route path="/UsignS" element={<UserSignS/>}/>
  <Route path="/GuideSign" element={<GuideSign/>} />
   <Route path="/Lous" element={<LoginSuccessful/>} />
   <Route path="/Design" element={<Success/>} />
   <Route path="/Guide" element={<TransitionBoxes/>} />
   <Route path="/Imagesearch" element={<ImageSearch/>} />
   
<Route path="/Manali" element={<Manali/>}/>
<Route path="/Kerala" element={<KeralaPage/>} />
<Route path="/Food" element={<FoodSearch/>}/>

<Route path="/Goa" element={<GoaPage/>}/>

<Route path="/Gujarath" element={<GujarathPage/>}/>
<Route path="/Chennai" element={<ChennaiPage/>}/>
<Route path ="/Kashmir" element={<KashmirPage/>}/>

<Route path="/Hotel" element={<HotelSearch/>}/>
<Route path="/Travel" element={<TravelSearch/>}/>
<Route path="/pay" element={<PaymentPage/>}/>
<Route path="/PayDone" element={<ThankYouPage/>}/>
<Route path="/buy" element={<PackageBuy/>}/>
   </Routes>







        </Router>

        
</>
  );
}

export default App;
