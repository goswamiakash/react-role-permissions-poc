import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Admin from './components/Page/SuperAdmin';
import TestEngineer from './components/Page/Admin/TestEngineer';
import OEMTestEngineer from './components/Page/Admin/OEMTestEngineer';
import Cxo from './components/Page/Admin/Cxo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test-engineer" element={<TestEngineer />} />
        <Route path="/oem-test-engineer" element={<OEMTestEngineer />} />
        <Route path="/cxo" element={<Cxo />} />
      </Routes>
    </Router>
  );
}

export default App;
