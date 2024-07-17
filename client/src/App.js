import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';

// Import other necessary components

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;