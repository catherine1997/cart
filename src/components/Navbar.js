import React from 'react';
import './Navbar.css'
import imgAma from '../backend/images/Amala.jpeg';
// import Form from './Form';
// import Home from '../pages/Home';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Navbar() {
  return (
    <div>
    

<header>
  {/* <a href='#'><img className='logo' src={imgAma} alt='Logo'/></a> */}
   
    <a href='#' className='logo'> CathyB</a>
    <input type='checkbox 'id='check'/>
    <span className='menu'>
    <i class="fa-solid fa-bars"></i>
    </span>
  <nav>
    <ul className='nav-links'>
      <li><a href='/'>Home</a></li>
      <li><a href='#'>Food</a></li>
      <li><a href='#'>Services</a></li>
      <li><a href='#'>About</a></li>
    </ul>
  </nav>
  <a href='#'><button>Sign Up</button></a>
</header>
    </div>
  )
}

export default Navbar;