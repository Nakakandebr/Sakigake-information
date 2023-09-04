import React, { useState } from "react";
import "./style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="logo">
      
<svg width="440" height="253" viewBox="0 0 440 253" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="275" cy="48" r="23" fill="#005B95"/>
<circle cx="275" cy="48" r="23" fill="#005B95"/>
 <circle cx="164" cy="48" r="23" fill="#005B95"/>
<circle cx="164" cy="48" r="23" fill="#005B95"/>
<path d="M179.154 91H145V228H179.154V166.024C214.284 195.381 246.919 178.256 258.846 166.024V228H293V91H258.846C258.575 110.028 252.341 144.821 219 144.821C187.665 144.821 179.425 107.853 179.154 91Z" fill="#008CBF"/>
 <path d="M179.154 91H145V228H179.154V166.024C214.284 195.381 246.919 178.256 258.846 166.024V228H293V91H258.846C258.575 110.028 252.341 144.821 219 144.821C187.665 144.821 179.425 107.853 179.154 91Z" fill="#008CBF"/>
</svg>
      </span>
        
    
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service"> Our Services</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;