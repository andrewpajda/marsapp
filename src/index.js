import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rovers = ['Curiosity', 'Opportunity', 'Spirit'];

ReactDOM.render(<App rovers={rovers} />, document.getElementById('root'));
