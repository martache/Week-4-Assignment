import React, { useState, useEffect } from 'react';

function App() {
  // State to store employees
  const [employees, setEmployees] = useState([]);

  // Function to add a new employee to the state
  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  // Function to save the employees array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  // Retrieve data from local storage when the component mounts
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  return (
    <div>
      <h1>Employment Management System v1.01- Employee list </h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
      <button onClick={() => addEmployee(prompt('Enter new employee name'))}>
        Add Employee
      </button>
      <button onClick={saveData}>Save Employees</button>
    </div>
  );
}

export default App;
