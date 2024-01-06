import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
  // To change the theme
  // const [color, setColor] = useState("#0c141b");

  // const colorChanger =(evt)=>{
  //   setColor(evt.target.value);
  //   props.changeTheme(color);
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">TextUtils</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>  
            </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onChange={props.ToggleMode} id="changeMode" />
              <p style={props.mode === 'light' ? {color: "#000"} : {color: "#fff"}}>{props.mode === 'light' ? "Enable dark mode" : "Enable light mode"}</p>
                {/*To change the theme */}
              {/* <label htmlFor="exampleColorInput" className="form-label" style={props.mode === 'light' ? {color: "#000"} : {color: "#fff"}}>Change the theme</label>
              <input type="color" className="form-control form-control-color" id="exampleColorInput" onChange={colorChanger} value={color} title="Choose your color"/> */}
            </div>
        </div>
    </nav>
  )
}
