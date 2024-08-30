import React, { useState } from 'react';
import '../styles//CreateRequest.css'; // Ensure this file exists and is in the right directory

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    equipmentId: '',
    personName: '',
    companyName: '',
    phoneNumber: '',
    expectedDaysReturn: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container">
      <h1>Create Request</h1>
      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="equipmentId">Equipment ID:</label>
        <input
          type="text"
          id="equipmentId"
          name="equipmentId"
          value={formData.equipmentId}
          onChange={handleChange}
          required
        />
        <label htmlFor="personName">Person Name:</label>
        <input
          type="text"
          id="personName"
          name="personName"
          value={formData.personName}
          onChange={handleChange}
          required
        />
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="expectedDaysReturn">Expected Days Return:</label>
        <input
          type="number"
          id="expectedDaysReturn"
          name="expectedDaysReturn"
          value={formData.expectedDaysReturn}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRequest;
