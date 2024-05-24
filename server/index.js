// app.js
const express = require('express');
const cors = require('cors'); // Import cors
const userRoutes = require('./routes/userRoutes'); // Import routes
const connectRoutes = require('./routes/connectRoutes'); // Import routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

// Routes
app.use('/users', userRoutes);
app.use('/connect', connectRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
