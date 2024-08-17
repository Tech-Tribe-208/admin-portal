import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LogoutPage from './pages/LogoutPage';
import BookingsPage from './pages/BookingsPage';
import CleanersPage from './pages/CleanersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/cleaners" element={<CleanersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
