import { useState } from 'react';
import './App.css';
import About from './Componants/About';
import Navbar from './Componants/Navbar';
import Textaria from './Componants/Textaria';
import Alert from './Componants/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {  
  //  Alert mode code
  const [alert, setalert] = useState(null);

  const showAlert =(message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
};

   // Dark mode && Light Mode Code
   
   const [mode, setMode] = useState('light');
   const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#1a0746'
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils-Dark Mode";

      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils-Light Mode";

    }
   }


  return (
    <>   
<Router>
      <Navbar title="React" Hometext="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Textaria showAlert={showAlert} heading="Text Here :-" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>

</>
    
  );
}

export default App;
