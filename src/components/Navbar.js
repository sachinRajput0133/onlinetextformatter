
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'? 'dark':'light'}`} to="/onlinetextformatter">Online Text Formatter</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className={`nav-link  text-${props.mode==='light'? 'dark':'light'}`} aria-current="page" to="/onlinetextformatter">Home</Link>
        </li> */}
        
    
        
      </ul>
    
    </div>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label mx-10 text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault ">Enable Dark Mode</label>
</div>
</nav>

    </div>
  )
}
