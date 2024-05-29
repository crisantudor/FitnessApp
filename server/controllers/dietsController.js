const Diets = require('../models/dietsModel');

exports.getAllDiets = async (req, res) => {
  try {
    const diets = await Diets.getAll();
    res.json(diets);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

