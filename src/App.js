// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Correct import path
import Login from './components/Login'; // Correct import path
import AdminDashboard from './components/AdminDashboard'; // Correct import path
import UserDashboard from './components/UserDashboard'; // Correct import path
import PrivateRoute from './components/PrivateRoute'; // Ensure this is correctly implemented
import './styles/App.css'; // Ensure App.css is in src/styles/

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    console.log('Login button clicked'); // Debug log
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('login-overlay')) {
      handleCloseLogin();
    }
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Centre for Sponsored Research and Consultancy</h1>
          <h2>PSG College of Technology</h2>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home onLoginClick={handleLoginClick} />} />
            <Route path="/login" element={<Login onClose={handleCloseLogin} />} />
            <Route path="/admin-dashboard" element={<PrivateRoute element={AdminDashboard} />} />
            <Route path="/user-dashboard" element={<PrivateRoute element={UserDashboard} />} />
          </Routes>
        </main>
        {showLogin && (
          <div className="login-overlay" onClick={handleOverlayClick}>
            <Login onClose={handleCloseLogin} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
