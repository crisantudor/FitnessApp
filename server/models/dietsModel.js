const pool = require('../db');

const Diets = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Diets');
    return rows;
  },
 

};

module.exports = Diets;
