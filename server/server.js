const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());



app.use('/', require('./routes/employeeRoutes'));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}  `));
