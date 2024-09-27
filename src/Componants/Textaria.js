import React,{useState } from "react";
import "./TextForm.css";

export default function Textaria(props) { 
  const handleUpClick =()=>{
    // console.log("Upper case was clicked" + text); ye browser me dikhane ke liye use hota hai consol me
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success");
  }
  const handleUpSmall =()=>{
    // console.log("Lower case was clicked" + text);
    let newText =text.toLowerCase();
    setText(newText);
  }
  const ClearText =()=>{   
    let newText ="";
    setText(newText);
    // const isConfirmed = window.confirm("Are you sure you want to Clear the Text?");
  }
  const HandleCopy =()=>{   
    // let newText = document.getElementById("myBox");   
    navigator.clipboard.writeText(text);
    alert("Copied");
    
    
  }
  const HandleExtraSpace = ()=> {   
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

    
  }
  const RemoveDot = ()=> {   
    let newText = text.replace(/\./g, "");
    setText(newText);  
    

    
  }
  const AddDot = () => {
    let newText = ""; // Assuming you have some way to know or decide where to add dots
    for (let i = 0; i < text.length; i++) {
      newText += text[i];
      if ((i + 1) % 2 === 0) { // Adds a dot after every 3rd character, for example
        newText += ".";
      }
    }
    setText(newText);
  }
  const handleOnChange =(event)=>{
    // console.log("On Chnage"); ye browser me dikhane ke liye use hota hai consol me
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  // text = "New Text Here"; This is wrong way to change the State
  // setText ("Hello Baby"); This is Correct way to change the State

 
  return (
    <>
    <div className="containe" style={{color:props.mode==='dark'?'white':'#1a0746'}}>
      <div className="mb-3 my-5">
      <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  {props.heading}
</h1>
        <textarea className="form-control" value={text}  onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='dark'?'#1a0746':'white',color:props.mode==='dark'?'white':'#1a0746',border:props.mode==='dark'?'3px solid white':'3px solid #1a0746'}} id="myBox"  rows="8"></textarea>
        <div className="d-felx " >
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={handleUpClick} style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}} >Convert to Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={handleUpSmall} style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}}>Convert to Lowercase</button>
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={ClearText}       style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}}>Clear text</button>
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={HandleCopy}  style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}}>Copy Text</button>
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={HandleExtraSpace} style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}}>Remove Extra Spaces</button>
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={RemoveDot}        style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}}>Remove Dot</button>
        <button disabled ={text.length===0} className="btn btn-success my-2  mx-2" onClick={AddDot}           style={{backgroundColor:props.mode==='dark'?'yellow':'green',color:props.mode==='dark'?'black':'white'}}>Apply Dot</button>
        </div>
      </div>  
    </div>  

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters and dots {(text.match(/\./g) || []).length}</p>
      <p id="textRead">{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Please Enter Some text Here --- >"}</p>
     

    </div>
    

    </>
  );
}
 
