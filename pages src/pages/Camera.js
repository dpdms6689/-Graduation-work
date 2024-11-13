import React from 'react';
import '../App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Camera() {
  return (
    <div className="card">
      <Header />
      <h2 className="page-title">Camera 페이지</h2>
      <img
        src="http://192.168.0.9:8080/?action=stream"
        alt="Live Stream"
        className="stream"
      />
      <Footer />
    </div>

  );
}

export default Camera;
