const express = require('express');
const dietsController = require('../controllers/dietsController');
const router = express.Router();

router.get('/', dietsController.getAllDiets);
router.get('/:id', dietsController.getDietById);
router.get('/user/:userId', dietsController.getDietsByUserId);

module.exports = router;
