import React from "react";
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/index';
import DayForecast from './pages/DayForecast';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/days" element={<DayForecast />} />
      </Routes>
    </Router>
  );
  
}

export default App;
