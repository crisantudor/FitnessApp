// controllers/userController.js
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.getById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    const result = await User.create({ name, email, password, age });
    res.status(201).json({ id: result.insertId, name, email, password, age });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, age } = req.body;
  try {
    const result = await User.update(id, { name, email, password, age });
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.json({ id, name, email, password, age });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.delete(id);
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.send('User deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
