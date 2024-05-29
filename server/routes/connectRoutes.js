const express = require('express');
const connectController = require('../controllers/connectController');
const router = express.Router();

// New routes for login and register
router.post('/login', connectController.loginUser);
router.post('/register', connectController.registerUser);

module.exports = router;
