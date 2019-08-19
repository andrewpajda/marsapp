import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rovers = ['Opportunity', 'Spirit']


ReactDOM.render(<App rovers={rovers} />, document.getElementById('root'));


