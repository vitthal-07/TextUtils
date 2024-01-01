import { About } from "./Components/About"
import { Navbar } from "./Components/Navbar"
import React from 'react'
import { TextForm } from "./Components/TextForm"
function App() {
  
  return (
    <>
      <Navbar/>
      <div className="container">
        {/* <About/> */}
        <TextForm/>
      </div>
    </>
  )
}

export default App
