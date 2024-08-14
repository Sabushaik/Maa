import React from 'react'
import  {Carousel}  from 'react-bootstrap'
import img1 from "../images/img1.jpg"
import img2 from"../images/img2.jpg"
import img3 from "../images/img3.jpg"


export default function Mycarousel() {
  return (

    
    <div className="Carousel-wrapper  " style={{border:'1px solid white ' , borderRadius:'5px'}}>

<Carousel>
    <Carousel.Item>
<img className="d-block w-100" style={{borderRadius:'10px'}} src={img1} alt="image 1" />
<Carousel.Caption>
  <h6>  First Image  </h6>
</Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img  className="d-block w-100"  style={{borderRadius:'10px'}}  src={img2} alt="image 2 "/>
    <Carousel.Caption>
  <h6>  Second Image  </h6>
</Carousel.Caption>
    </Carousel.Item>
        
    <Carousel.Item>
    <img className=" d-block w-100 "  style={{borderRadius:'10px'}}  src={img3} alt="image3"/>
    <Carousel.Caption>
  <h6>  Third Image  </h6>
</Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

