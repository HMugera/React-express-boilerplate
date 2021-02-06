const express = require('express');
const controller = require('../controllers/employeesCont');
const router = express.Router();

router.get('/employees', controller.getEmployees);
router.get('/employees/books', controller.getBooks);
// router.post('/login',authController.login)

module.exports = router;
