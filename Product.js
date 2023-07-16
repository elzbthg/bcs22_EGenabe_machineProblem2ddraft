// Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  isActive: { type: Boolean, default: true },
  purchasedOn: { type: Date, default: Date.now },
  userOrders: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      orderId: String,
    },
  ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
