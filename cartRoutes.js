// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add product to cart
router.post('/add', cartController.addToCart);

// Change product quantity in cart
router.put('/change-quantity', cartController.changeProductQuantity);

// Remove product from cart
router.delete('/remove', cartController.removeFromCart);

module.exports = router;
