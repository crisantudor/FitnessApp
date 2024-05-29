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

exports.getDietById = async (req, res) => {
  const { id } = req.params;
  try {
    const diet = await Diets.getById(id);
    if (!diet) {
      return res.status(404).send('Diet not found');
    }
    res.json(diet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getDietsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const diets = await Diets.getByUserId(userId);
    if (!diets) {
      return res.status(404).send('Diets not found');
    }
    res.json(diets);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
