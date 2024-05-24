const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    try {
      const { name, email, password, age } = req.body;
      const user = await User.create({ name, email, password, age });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Error registering user' });
    }
  };
  
  exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.getByEmailAndPassword({ email, password });
      if (!user) {
        res.status(401).json({ message: 'Invalid email or password' });
      } else {
        res.status(200).json({ message: 'Login successful', user });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  };