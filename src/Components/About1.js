import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';


function About1() {

  


  const[btntext ,setBtnText ]=useState("Enable Light Mode")
  

  const[ myStyle ,setMystyle]=useState(
  {

    color:'white',
    backgroundColor:'black',
    
    
    

  }
  )


 
  const toggleStyle =()=>
  {
    if(myStyle.color ==='white')
    {
      setMystyle({
        color:'black',
    backgroundColor:'white ',
      })

      setBtnText("Enable Dark Mode")
      
    }
    else
    {
      setMystyle({
        color:'white',
    backgroundColor:'black ',
    border:'1px solid white'
      })

      setBtnText("Enable Light Mode")
     


    }


  }



  
  return (
    <div className="container my-3 " style={ myStyle  }  >
      <h1> About us </h1>
    <Accordion defaultActiveKey="0"  style={myStyle} >
      <Accordion.Item eventKey="0" style={myStyle} >
        <Accordion.Header  style={{color:'white ' , backgroundColor:'black'}}>Accordion Item #1</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"   style={myStyle}>
        <Accordion.Header style={{color:'white ' , backgroundColor:'black'}}>  Accordian 2</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    < div className="container my-3">
    <button onClick={toggleStyle} type="button" class="btn btn-outline-success"  >{btntext}</button>

    </div>
    </div>
   
  );
}

export default About1;

