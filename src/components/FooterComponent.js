import React from 'react';
import apLogo from '../assets/logo_small_transparent.png';

function Footer() {
  return (
  <div className='container flexbox' id='footer'>
    <div className='footer-logo'>
      <img className='header-logo-image' src={apLogo} alt="mars application logotype"/>
    </div>
    <div className='footer-copyrights'>
      <p className='footer-copyrigths-text'>Copyrights 2019</p>
    </div>
  </div>
  )
}

export default Footer