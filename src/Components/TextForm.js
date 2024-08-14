import React ,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] =useState('Enter some')
    const handleOnclick =()=>{
      console.log("Hey u clicked the button"+text);
     let newtext=text.toUpperCase();
     setText(newtext);
    }
    const handleOnchange =(event)=>{
      console.log("uppercase to lower case");
      setText(event.target.value)
      
    }
    const handleTocopy =()=>
    {
      console.log("I am copy ");
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);


    }
    const handleSpaces=()=>
    {
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
    }

    const handleToclear = ()=>
    {
    let newtext ='';
    setText(newtext);
    }

    const handleLoclick = ()=>
  {
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  return (
    <>
    <div className="container  my-3" style={{color:props.mode===`dark`?`white`:`#042743`}}>
    <h1 className= " container my-4"> <b >{props.heading}</b></h1>
    <div className=' mb-4' >
  
  <textarea className="form-control" id="exampleFormControlTextarea1"  value={text} onChange={handleOnchange} rows="8" style={{backgroundColor:props.mode===`dark`?`grey`:`white` , color:props.mode===`dark`?`white`:`#042743`}}></textarea>
  </div>
  <div>
  <button className="btn btn-primary mx-3" onClick={handleOnclick} >Convert the upper Case</button>
  
  <button className="btn btn-primary mx-3" onClick={handleLoclick} >Convert the Lower Case</button>

  <button className="btn btn-primary mx-3" onClick={handleToclear} >Clear</button>

  <button className="btn btn-primary mx-3" onClick={handleTocopy}>Copy</button>

  <button className='btn btn-primary mx-3' onClick={handleSpaces} > Remove extra  spaces</button>
  </div>
<div className='Container my-5' >

  <h1> Summary of the Text-Box  </h1>

  <p>No of words {text.split(" ").length}  and No of characters {text.length}</p>
  <h2 className="container my-4">Preview </h2>
  <p>{text.length>0?text: "Dear User enter something to preview here" }</p>

  <h3> {0.008*text.split(" ").length} Minutes of time to read </h3>

  <p className="text-7xl text-center text-blue"> Hey sabu how are you </p>
  

</div>
</div>


   
</>
  )
}
