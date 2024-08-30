// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import logo from '../images/screen-3.jpg'; // Correct path to your image

const Home = ({ onLoginClick }) => {
  return (
    <div className="home-container">
      <img src={logo} alt="Centre Logo" className="home-image" />
      <button className="login-button" onClick={onLoginClick}>Login</button>
    </div>
  );
};

export default Home;
