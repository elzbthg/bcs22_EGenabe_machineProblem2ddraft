// Cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      productName: String,
      quantity: Number,
    },
  ],
  totalPrice: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;