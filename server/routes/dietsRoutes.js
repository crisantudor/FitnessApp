const express = require('express');
const dietsController = require('../controllers/dietsController');
const router = express.Router();

router.get('/', dietsController.getAllDiets);

module.exports = router;
