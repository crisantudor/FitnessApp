//models/userModel.js
const pool = require('../db');

const User = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Users');
    return rows;
  },
  getById: async ({id}) => {
    const [rows] = await pool.query('SELECT * FROM Users WHERE id = ?', [id]);
    return rows[0];
  },
  getByEmailAndPassword: async ({email, password}) => {
    const [rows] = await pool.query(`SELECT * FROM Users WHERE email = '${email}' AND password = '${password}'`);
    return rows[0];
  },
  create: async (user) => {
    const { name, email, password, age } = user;
    await pool.query('INSERT INTO Users (name, email, password, age) VALUES (?, ?, ?, ?)', [name, email, password, age]);
    const [rows] = await pool.query(`SELECT * FROM Users WHERE email = '${email}' AND password = '${password}'`);
    return rows[0];
  },
  update: async ({id, user}) => {
    const { name, email, password, age } = user;
    const [result] = await pool.query('UPDATE Users SET name = ?, email = ?, password = ?, age = ? WHERE id = ?', [name, email, password, age, id]);
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Users WHERE id = ?', [id]);
    return result;
  }
};

module.exports = User;
