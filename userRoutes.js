// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.registerUser);

// User authentication
router.post('/login', userController.authenticateUser);

// Retrieve user details
router.get('/:userId', userController.getUserDetails);

module.exports = router;
