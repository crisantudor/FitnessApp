const pool = require('../db');

const Activity = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Activities');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Activities WHERE id = ?', [id]);
    return rows[0];
  },
  getByUserId: async (userId) => {
    const [rows] = await pool.query('SELECT * FROM Activities WHERE userId = ?', [userId]);
    return rows;
  },
  create: async (activity) => {
    const { userId, activityType, duration, caloriesBurned, activityDate } = activity;
    await pool.query('INSERT INTO Activities (userId, activityType, duration, caloriesBurned, activityDate) VALUES (?, ?, ?, ?, ?)', 
      [userId, activityType, duration, caloriesBurned, activityDate]);
    const [rows] = await pool.query('SELECT * FROM Activities WHERE userId = ? AND activityType = ? AND activityDate = ?', 
      [userId, activityType, activityDate]);
    return rows[0];
  },
  update: async (id, activity) => {
    const { activityType, duration, caloriesBurned, activityDate } = activity;
    const [result] = await pool.query('UPDATE Activities SET activityType = ?, duration = ?, caloriesBurned = ?, activityDate = ? WHERE id = ?', 
      [activityType, duration, caloriesBurned, activityDate, id]);
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Activities WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Activity;
