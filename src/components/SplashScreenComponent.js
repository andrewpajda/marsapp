import React, { Component } from 'react';
import logo from '../assets/ootw_logo.png'

class SplashScreen extends Component {
  render() { 
    return (
    <div className='container flexbox'>
      <div className='header-logo'>
        <img className='header-logo-image' src={logo} alt="mars application logotype"/>
      </div>
      <div className='header-welcome'>
        <h1 className='header-welcome-title'>Welcome to Mars App</h1>
        <p className='header-welcome-text'>Your app is loading...</p>
      </div>
    </div>
    );
  }
}
 
export default SplashScreen;
