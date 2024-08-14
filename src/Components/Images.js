import React from 'react';
import "./Divblock.css";
import Manali from "../images/Manali.png";
import Kerala from "../images/Kerala.jpg";
import Goa from "../images/Goa.jpg";
import Kashmir from "../images/Kashmir.jpg";
import Chennai from "../images/Chennai.jpg";
import Gujarath from "../images/Gujarath.jpg";
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Images() {
  const location = useLocation();
  const receivedData = location.state?.data;
  return (

    <>
  <div class="full-width-div">
      <div className="row-div ">
                      
                        
                      <div className="box my-5 mx-3">
                  <Link to={{pathname:'/Manali' ,state:{receivedData}} } >     <img src={Manali} width="210px" height="175px" alt="Manali image" style={{borderRadius:'5px'}} />
                  </Link> 
                        
                      </div>

                      

                     
                 <div className="box my-5 mx-3">
                 <Link to="/Kerala"  >      <img src={Kerala} width="210px" height="175px" alt="Manali image" style={{borderRadius:'5px'}} />
                       
                 </Link> 

                      </div>
                    
                      
                     
                      <div className="box my-5 mx-3">
               <Link to="/Goa"><img src={Goa} width="210px" height="175px" alt="Manali image" style={{borderRadius:'5px'}} />
               </Link>         

                      </div>
                      
                      
                        
                      <div className="box my-5 mx-3">
              <Link to="/Kashmir" >        <img src={Kashmir} width="210px" height="175px" alt="Manali image" style={{borderRadius:'5px'}} />
                        
              </Link>  
                      </div>
                    
                      
                       
                      <div className="box my-5 mx-3">
                 <Link to="/Gujarath">     <img src={Gujarath} width="210px" height="175px" alt="Manali image" style={{borderRadius:'5px'}} />
                        
                       
                 </Link>  

                      </div>
                      
                     
                      
                      <div className="box my-5 mx-3">
                     <Link to="/Chennai">   <img src={Chennai} width="210px" height="175px" alt="Manali image" style={{borderRadius:'5px'}} />
                     </Link>
                      </div>
                    
                      
                      

                    </div>
    
                    </div>


<div className='full-width-div'>
  <div className='row-div'>
    <div className=" my-2 mx-3">
    <h3 style={{position: 'relative' ,marginRight:'150px'}}>Manali</h3> 
    </div>
    <div className="my-2 mx-3">

    <h3 style={{position: 'relative', marginRight: '150px'}}>Kerala</h3> 
    </div>

    <div className="my-2 mx-3">
    <h3 style={{position: 'relative', marginRight: '150px'}}>GOA</h3> 
    </div>

<div className=" my-2 mx-3">
<h3 style={{position: 'relative', marginRight: '150px'}}>Kashmir</h3> 
</div>
<div className=" my-2 mx-3">
<h3 style={{position: 'relative', marginRight: '100px'}}>Gujarath</h3> 
</div>
<div className="my-2 mx-3">
<h3 style={{position: 'relative'}}>Chennai</h3> 
</div>



  </div>
</div>



                    
</>
    
  )
}
