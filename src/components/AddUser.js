// src/components/AddUser.js
import React, { useState } from 'react';
import '../styles/AddUser.css'; // Import the CSS for styling

function AddUser() {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Staff');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ userId, email, password, role, fullName });
  };

  return (
    <div className="add-user-container">
      <div className="add-user-form">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input 
              type="text" 
              id="userId" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select 
              id="role" 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              required
            >
              <option value="Staff">Staff</option>
              <option value="Faculty">Faculty</option>
              <option value="Dean-IRD">Dean-IRD</option>
              <option value="Dean-Admin">Dean-Admin</option>
              <option value="Principal">Principal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
