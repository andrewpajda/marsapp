import React from 'react';
import logo from '../assets/ootw_logo.png'

function Header() {
  return (
    <header>
      <div class='container'>
        <div class='flexbox'>
          <div id='logo'>
            <img src={logo} alt="mars application logotype"/>
          </div>
          <div id='welcome'>
            <h1>Welcome to Mars App</h1>
            <p>This simple app allows you to browse all the photos taken by martian rovers. Thanks to NASA API integration you can see what was seen by Curiosity, Opportunity and Spirit rovers. Enjoy!</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
