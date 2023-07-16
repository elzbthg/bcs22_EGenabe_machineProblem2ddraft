// cartController.js
const Cart = require('../models/Cart');

// Add product to cart
exports.addToCart = async (req, res) => {
  try {
    // Get user ID from request body
    const { userId } = req.body;

    // Get product details from request body
    const { productId, productName, quantity } = req.body;

    // Find the user's cart in the database
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // User's cart not found, create a new cart
      cart = new Cart({ userId, products: [] });
    }

    // Add the product to the cart
    cart.products.push({ productId, productName, quantity });

    // Save the cart to the database
    await cart.save();

    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart' });
  }
};

// Change product quantity in cart
exports.changeProductQuantity = async (req, res) => {
  try {
    // Get user ID from request body
    const { userId } = req.body;

    // Get product details from request body
    const { productId, quantity } = req.body;

    // Find the user's cart in the database
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      // User's cart not found
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the index of the product in the cart
    const productIndex = cart.products.findIndex((product) => product.productId === productId);

    if (productIndex === -1) {
      // Product not found in the cart
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Update the quantity of the product
    cart.products[productIndex].quantity = quantity;

    // Save the updated cart to the database
    await cart.save();

    res.json({ message: 'Product quantity changed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error changing product quantity' });
  }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
  try {
    // Get user ID from request body
    const { userId } = req.body;

    // Get product ID from request body
    const { productId } = req.body;

    // Find the user's cart in the database
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      // User's cart not found
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the index of the product in the cart
    const productIndex = cart.products.findIndex((product) => product.productId === productId);

    if (productIndex === -1) {
      // Product not found in the cart
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Remove the product from the cart
    cart.products.splice(productIndex, 1);

    // Save the updated cart to the database
    await cart.save();

    res.json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart' });
  }
};
