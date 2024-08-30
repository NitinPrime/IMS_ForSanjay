import React, { useState } from 'react';
import '../styles//AddItems.css'; // Ensure this file exists and is in the right directory

const AddItems = () => {
  const [formData, setFormData] = useState({
    equipmentName: '',
    make: '',
    model: '',
    serialNumber: '',
    status: ''
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
      <h1>Add Items</h1>
      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="equipmentName">Equipment Name:</label>
        <input
          type="text"
          id="equipmentName"
          name="equipmentName"
          value={formData.equipmentName}
          onChange={handleChange}
          required
        />
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <label htmlFor="serialNumber">Serial Number:</label>
        <input
          type="text"
          id="serialNumber"
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItems;
