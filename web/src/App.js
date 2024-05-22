// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
  );
}

export default App;
