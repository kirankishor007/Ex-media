import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <nav className="navbar">
      <div className="logo"><img src={logo} alt="Ex Media Logo" className="logo-img" /></div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/services" className="nav-link">Services</a></li>
          <li><a href="/deliverables" className="nav-link">Deliverables</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact Us</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
    </>
  )
}

export default Header
