import React from "react";
import "./Navbar.css";                 // same folder
import logo from "../../assets/logo.svg"; // 2 levels up, then assets


const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
    
      </div>

      <ul className="nav-manu">
        <li>Home</li>
      <li>About</li>
      <li>portfolio</li>
      <li>services</li>
      <li>contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </nav>
  );
};

export default Navbar;
