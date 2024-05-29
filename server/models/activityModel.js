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
    const [rows] = await pool.query('SELECT * FROM Activities WHERE user_id = ?', [userId]);
    return rows;
  },
  create: async (activity) => {
    const { userId, activityType, duration, caloriesBurned, activityDate } = activity;
    await pool.query('INSERT INTO Activities (user_id, activity_type, duration, calories_burned, activity_date) VALUES (?, ?, ?, ?, ?)', 
      [userId, activityType, duration, caloriesBurned, activityDate]);
    const [rows] = await pool.query('SELECT * FROM Activities WHERE user_id = ? AND activity_type = ? AND activity_date = ?', 
      [userId, activityType, activityDate]);
    return rows[0];
  },
  update: async (id, activity) => {
    const { activityType, duration, caloriesBurned, activityDate } = activity;
    const [result] = await pool.query('UPDATE Activities SET activity_type = ?, duration = ?, calories_burned = ?, activity_date = ? WHERE id = ?', 
      [activityType, duration, caloriesBurned, activityDate, id]);
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Activities WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Activity;
