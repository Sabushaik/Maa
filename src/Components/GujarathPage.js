import React from 'react'

import './Manali.css'
import Gujarath from "../images/Gujarath.jpg";
import {Link } from 'react-router-dom'

import Random from './Random';

function GujarathPage() {
  return (
    <>
    
<div className="sabuDiv">

<h1 className="h1sabu" style={{marginTop:'10px' ,padding:'30px'}} >Welcome To Gujarath Section</h1> 

</div>
<div className="my-5">
<Random/>
</div>


<div className="horizontal-row-container">
        <div className="text-container">

        <h2> Explore Gujarath : Your Gateway to the Mid India </h2>
        <p>
      



<h3>Overview:</h3>
Experience the enchanting beauty of Manali with our curated travel package, perfect for adventurers, families, and honeymooners seeking an unforgettable escape in the heart of the Himalayas.

<h3>Package Highlights:</h3>

<h3>1. Accommodation:</h3>
   <p>- Stay in luxury resorts or cozy cottages nestled amidst breathtaking mountain views and serene landscapes.
   </p>
<h3>2. Sightseeing:</h3>
   <p> - Discover iconic attractions such as:
     - Hadimba Temple:** A historical wooden temple surrounded by cedar forests.
     - Solang Valley:** Offering panoramic views and adventure activities like paragliding and zorbing.
     - Rohtang Pass:** Weather-permitting, experience its majestic snow-covered peaks and scenic beauty.
     - Manu Temple:** Dedicated to Sage Manu, offering spiritual tranquility and stunning architecture.
     </p>
<h3>3. Adventure Activities:</h3>
   - Indulge in thrilling adventures such as:
     Manythings


Book Your Adventure:

Contact us today to customize your Manali package and embark on a journey of a lifetime amidst the majestic Himalayas.


Ensure your website reflects the essence of Manali through engaging visuals, testimonials, and detailed itineraries. This approach will appeal to travelers seeking a blend of adventure, culture, relaxation, and natural beauty in their vacation experience.
        </p>
      
        
        </div>


<div className="image-container">
<img
          src={Gujarath} // Placeholder image URL
          alt="Placeholder"
        />
</div>

    </div>


    </>
  )
}

export default GujarathPage
