import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import your App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './assets/styles.css';

ReactDOM.render(
  <Router>  {/* Wrap your App with BrowserRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);
