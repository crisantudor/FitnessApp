// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import ConnectPage from './pages/ConnectPage';
import HomePage from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { ActivityPage } from './pages/ActivityPage';
import DietsPage from './pages/DietsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectPage/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/activity" element={<ActivityPage/>} />
        <Route path="/diets" element={<DietsPage/>} />
        <Route path="/settings" element={<SettingsPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
