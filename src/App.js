import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');

  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
    message:message,
    type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
    document.title="TextUtils - Dark Mode"
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title="TextUtils - light Mode"
    
  }
}

  
  return (
    <>
    <Router>
      <NavBar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
         <Routes>
          <Route exact path="/about" element={<About/>}/>

          <Route exact path="/" element={<TextForm heading="Enter the text to analayze" mode={mode} />} />
          
        </Routes> 
        </div>
        </Router>
    </>
  );
}

export default App;
