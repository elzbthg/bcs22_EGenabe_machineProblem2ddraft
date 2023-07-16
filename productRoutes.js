// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/', productController.createProduct);

// Retrieve all products
router.get('/', productController.getAllProducts);

// Retrieve all active products
router.get('/active', productController.getActiveProducts);

module.exports = router;
