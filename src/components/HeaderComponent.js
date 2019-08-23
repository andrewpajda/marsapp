import React from 'react';
import logo from '../assets/ootw_logo.png'

function Header() {
  return (
  <div className='container flexbox'>
    <div className='header-logo'>
      <img className='header-logo-image' src={logo} alt="mars application logotype"/>
    </div>
    <div className='header-welcome'>
      <h1 className='header-welcome-title'>Welcome to Mars App</h1>
      <p className='header-welcome-text'>This simple app allows you to browse all the photos taken by martian rovers. Thanks to NASA API integration you can see what was seen by Curiosity, Opportunity and Spirit rovers. Enjoy!</p>
    </div>
  </div>
  )
}

export default Header
