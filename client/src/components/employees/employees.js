import React, { useState, useEffect } from 'react';
import './employees.css';
import Axios from 'axios';

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);
  const [bookData, setbookData] = useState([]);

  useEffect(() => {
    Axios.get('/employees')
      .then((response) => {
        setEmployeesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.get('/employees/books')
      .then((response) => {
        setbookData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Employees List</h1>
      <hr />
      {employeesData.map((employee) => (
        <div className='people' key={employee.id}>
          <h3>{employee.employeeName}</h3>
        </div>
      ))}
      {bookData.map((book) => (
        <div className='people' key={book.id}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Employees;
