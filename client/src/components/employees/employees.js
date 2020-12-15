import React, { useState, useEffect } from 'react';
import './employees.css';

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetch('/api/employees')
      .then((res) => res.json())
      .then((employees) => {
        setEmployeesData(employees);
        console.log(employees);
      });
  }, []);
  return (
    <div>
      <h1>Employees List</h1>
      {employeesData.map((employee) => (
        <div className='people' key={employee.id}>
          <h1>
            {employee.firstName} {employee.lastName}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Employees;
