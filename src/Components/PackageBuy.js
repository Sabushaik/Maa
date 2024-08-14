import React from 'react'
import Xub from "../images/Manali.png";
import {useLocation ,Link} from'react-router-dom';
import './Manali.css';
import Carousel2 from './Carousel2';

function PackageBuy() {


    const hotelItems = [
        { id: 1, name: "Sabu", imageUrl: 'https://th.bing.com/th/id/OIP.PhJZ3bG_3gRcvHqDcmtNlgAAAA?rs=1&pid=ImgDetMain', price:500  },
        { id: 2, name: 'Shaik', imageUrl: 'https://th.bing.com/th/id/OIP.hCEhQp2wFCcvElnN7JE1vwHaFI?rs=1&pid=ImgDetMain', price:300 }
        
      
        
        // Add more items as needed
      ];
  return (
    <div>
         <div>
        
        <h1 style={{textAlign:'center'}}>Guides Selection</h1>
        <Carousel2 items={hotelItems} />
      </div>
        

        

          <div className="horizontal-row-container">
        <div className="text-container">

        <h2> Explore Manali: Your Gateway to the Himalayas </h2>
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


 
        </p>

   <div className="SabuCen" style={{alignItems:'center' , alignContent:'center',marginRight:'40px'}}>   <Link to="/pay" ><button type="submit"  style={{marginRight:'40px'}}>Buy Now</button> </Link> </div>  

        </div>


<div className="image-container">
<img
          src={Xub}  width={'400px'} // Placeholder image URL
          alt="Placeholder"
        />
</div>


    </div>
      
    </div>
  )
}

export default PackageBuy
