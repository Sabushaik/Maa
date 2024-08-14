import React from 'react';
import {useState , useEffect} from 'react';
import { Paper } from '@mui/material';


function Success() {
  
    const[shikaris , setStudents]=useState([]);
    const paperStyele ={padding :"50px 40px " , width:800 , margin:"30px auto"}

  useEffect(()=>{
    fetch("http://localhost:8080/shikari/Gget")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])
  return (
    <>
   


    <center><h1 >Our Guides </h1></center>

<Paper elevation={3} style={paperStyele}>

  {shikaris.map(student=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
     Id:{student.id}<br/>
     Name:{student.guideName}<br/>
     Age:{student.guideAge}<br/>
     Phone:{student.guidePhone}<br/>
     Location:{student.guideLocation}<br/>


    </Paper> ))
}

</Paper>
</>


  );
}

export default Success;
