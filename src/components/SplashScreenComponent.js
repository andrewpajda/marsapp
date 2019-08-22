import React, { Component } from 'react';
import logo from '../assets/ootw_logo.png'

class SplashScreen extends Component {
  render() { 
    return (
    <header>
      <div class='container'>
        <div className="flexbox">
          <div id='logo'>
            <img src={logo} alt="mars application logotype"/>
          </div>
          <div id='welcome'>
            <h1>Welcome to Mars App</h1>
            <p>Your app is loading...</p>
          </div>
        </div>
      </div>
    </header>
    );
  }
}
 
export default SplashScreen;
