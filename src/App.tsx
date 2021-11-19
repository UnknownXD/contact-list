import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import ContactPage from './pages/ContactPage/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
