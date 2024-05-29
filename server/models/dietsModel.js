const pool = require('../db');

const Diets = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Diets');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Diets WHERE id = ?', [id]);
    return rows[0];
  },
  getByUserId: async (userId) => {
    const [rows] = await pool.query('SELECT * FROM Diets WHERE user_id = ?', [userId]);
    return rows;
  },
};

module.exports = Diets;
