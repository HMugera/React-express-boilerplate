const express = require('express');

const app = express();

app.get('/api/employees', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Linda', lastName: 'Harry' },
    { id: 3, firstName: 'Hero', lastName: 'Suzuki' },
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}  `));
