import { About } from "./Components/About"
import { Navbar } from "./Components/Navbar"
import React, {useState} from 'react'
import "./App.css"
import { TextForm } from "./Components/TextForm"
import { Alert } from "./Components/Alert"

import { 
  Route, 
  Routes, 
  Link
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
  }
  const ToggleMode = ()=>{
    if(mode === 'light'){
      document.querySelector('body').style.backgroundColor = '#0c141b';
      setMode('dark');
      showAlert("Dark mode has been enabled!","success");
    } else{
      document.querySelector('body').style.backgroundColor = '#fff';
      setMode('light');
      showAlert("Light mode has been enabled!","success");
    }
  }
  // To change the theme
  // const changeTheme = (color)=>{
  //   document.querySelector('body').style.backgroundColor = color;
  // }
  return (
    <>
      <Navbar ToggleMode={ToggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm ToggleMode={ToggleMode} showAlert={showAlert} mode={mode}/>}/>
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
