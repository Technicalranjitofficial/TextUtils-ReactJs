// import Form from './Components/forms';


import './App.css';
import Navbar from './Components/Navbar';
import FormsText from './Components/FormsText';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
// import { Routes, Route } from "react-router-dom";




function App() {
  const [mode,SetMode] = useState('light');
  const [alert,setAlert] = useState(null);
 
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      SetMode('dark');
      document.body.style.backgroundColor='grey';
      document.body.style.textColor='dark';
      showAlert('Dark Mode has been Enabled','success');
    }else{
      SetMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.textColor='white';
      showAlert('Light Mode has been Enabled','success');
  }
  }

  


  return (
   
    <>
    <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" homeText="Home" aboutText="About" />
    <div className="container"><Alert alert={alert}/></div>
        {/* <Routes> */}
        {/* <Route path="/" element={<FormsText />} /> */}
       
        {/* <Route path="/" element={ <div className="container"> <FormsText mode={mode} showAlert={showAlert} /> </div>} /> */}
        <div className="container"> <FormsText mode={mode} showAlert={showAlert} /> </div>
        {/* <Route exact path="about" element={
          <div className="container">
            <About />
            </div>
            } /> */}

          
        
      {/* </Routes> */}
    </>
     
     
   
     );
}

export default App;
