// src/components/Login.js
import React from 'react';
import '../styles/Login.css';

const Login = ({ onClose }) => {
  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
