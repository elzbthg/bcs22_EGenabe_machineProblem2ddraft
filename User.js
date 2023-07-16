// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  orderedProduct: [
    {
      products: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
          productName: String,
          quantity: Number,
        },
      ],
    },
  ],
  totalAmount: Number,
  purchasedOn: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
