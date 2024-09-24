import React, { useState } from 'react';
import './EmployeeForm.css'; // Import the CSS file for styling

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    position: '',
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can add any action, such as sending the data to an API
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
