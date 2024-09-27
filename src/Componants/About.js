import React, {useState} from "react";

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: "white" ,
    //     backgroundColor: "black"
    //     // border
    // });

  //   const [btnText, setBtnText] = useState('Enable Dark Mode')

  //  const toggleStyle = ()=>{
  //       if(myStyle.color == 'white'){
  //           setmyStyle({
  //               color: "black" ,
  //               backgroundColor: "white",              
                
  //           }   
  //           )
  //           setBtnText("Enable Dark Mode");
  //       }
  //       else{
  //           setmyStyle({
  //               color: "white" ,
  //               backgroundColor: "black",
  //               border: "2px solid white"
                
  //           }   
  //           )
  //           setBtnText("Enable Light Mode");
    
  //       }
  //   }

  let myStyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'#332f58':'white',
    border: '1px solid',
    borderColor: props.mode === 'dark'?'white':'#042743',

  }
    
    

    
  return (
    <div>
      <div className="container">
      <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About us:-</h1>
        <div className="accordion" id="accordionExample"  >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne" style={myStyle}
              >
                <strong>Introduction</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                My Name Is Ompraksh Shersiya i born in 8 august 1999 in jaipur city
                and my short name op my education BA pat final year.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo" style={myStyle}
              >
                <strong>Speech</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              My Name Is Ompraksh Shersiya i born in 8 august 1999 in jaipur city
              and my short name op my education BA pat final year.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree" style={myStyle}
              >
                <strong>Demo</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              My Name Is Ompraksh Shersiya i born in 8 august 1999 in jaipur city
              and my short name op my education BA pat final year.
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary mx-4 my-2" onClick={toggleStyle}>{btnText}</button> */}
      </div>    
      
    </div>
  );
}
