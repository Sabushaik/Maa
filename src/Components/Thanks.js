import React from 'react'
import { useLocation } from 'react-router-dom';
import ThankYouPage from './ThankyouPage';

function Thanks() {
    const location = useLocation();
  const receivedData = location.state?.data;
  return (
    <div>


      <ThankYouPage/>
    <h1>  Thanks  {receivedData.cardname+" "}For Buying Have a great day  </h1>
  <h2>Check Your Email For Trip Details</h2> 



    </div>
  )
}

export default Thanks
