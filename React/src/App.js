import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Grafana from './pages/Grafana';
import Camera from './pages/Camera';
import Php from './pages/Php';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes> {/* Switch 대신 Routes 사용 */}
        <Route path="/" element={<Home />} />
        <Route path="/grafana" element={<Grafana />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/php" element={<Php />} />
      </Routes>
    </Router>
  );
}

export default App;
