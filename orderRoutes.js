// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Retrieve authenticated user's orders
router.get('/user/:userId', orderController.getUserOrders);

// Retrieve all orders (admin only)
router.get('/all', orderController.getAllOrders);

module.exports = router;
