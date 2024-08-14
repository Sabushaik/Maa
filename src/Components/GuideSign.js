import React from 'react'
import './UsignS.css'
import {  Link ,useLocation } from 'react-router-dom';
function GuideSign() {
    const location = useLocation();
    const receivedData = location.state?.data;
  return (
    <div>
      <div className="Styling">

</div>
  


<center>
  
<h1 style={{color:'green'}}> Hey guide {receivedData?.guideName + " " } Ur SignUp got Success in Succes</h1>
   <br>
   </br>
    

 <b>  <h2 style={{color:'Red'}}> Click the button to login</h2> </b>

<Link to="/GLog" ><button type ="submit"> Login </button></Link>
</center>
    </div>
  )
}

export default GuideSign
