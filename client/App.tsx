import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import Schedules from './pages/Schedules';
import Billing from './pages/Billing';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

