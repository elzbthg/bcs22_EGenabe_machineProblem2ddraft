// userController.js
const User = require('../models/User');

// User registration
exports.registerUser = async (req, res) => {
  try {
    // Get user data from request body
    const { email, password } = req.body;

    // Create a new user
    const user = new User({ email, password });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

// User authentication
exports.authenticateUser = async (req, res) => {
  try {
    // Get user data from request body
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      // User not found or invalid credentials
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // User authenticated successfully
    res.json({ message: 'User authenticated' });
  } catch (error) {
    res.status(500).json({ message: 'Error authenticating user' });
  }
};

// Retrieve user details
exports.getUserDetails = async (req, res) => {
  try {
    // Get user ID from request params
    const { userId } = req.params;

    // Find the user in the database
    const user = await User.findById(userId);

    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }

    // Exclude the password field from the response
    user.password = undefined;

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user details' });
  }
};
