// app.js
const express = require('express');
const cors = require('cors'); 
const userRoutes = require('./routes/userRoutes');
const connectRoutes = require('./routes/connectRoutes');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

// Routes
app.use('/users', userRoutes);
app.use('/connect', connectRoutes);
app.use('/activities', activityRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
