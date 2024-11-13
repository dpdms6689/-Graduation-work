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


App.css

/* 전체 바디 스타일 */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* 카드 스타일 */
.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    padding: 20px;
    width: 80%;
    max-width: 800px;
}

/* 버튼 스타일 */
.button {
    display: inline-block;
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #218838;
}

/* 페이지 제목 스타일 */
.page-title {
    text-align: center;
    margin-top: 20px;
    color: #333;
}

/* 테이블 스타일 */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

th {
    background-color: #f2f2f2;
    color: #333;
}

.App {
  text-align: center;
  background-color: #f8f8f8;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin: 20px 0;
}

h2 {
  font-size: 2rem;
  margin: 20px 0;
}

table {
  margin: 20px auto;
  border-collapse: collapse;
  width: 80%;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
}

iframe {
  width: 100%;
  height: 100vh;
  border: none;
  margin-top: 20px;
}

.stream {
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 20px auto;
  border: 2px solid #ccc;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

.App-header {
  background-color: #282c34; 
  padding: 20px;
  color: white; 
  display: flex;
  justify-content: space-between; 
  align-items: center; 

nav ul {
  list-style: none;
  padding: 0; 
  margin: 0; 
}

nav ul li {
  display: inline; 
  margin-right: 15px; 
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold; 
  transition: color 0.3s ease; 
}

nav ul li a:hover {
  text-decoration: underline; 
  color: #61dafb; 
}

.footer {
  background-color: #282c34;
  color: white; 
  text-align: center; 
  padding: 10px 0; 
  position: relative; 
  bottom: 0; 
  width: 100%;
}

.grafana-panels {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
}

.grafana-panel {
  width: 33%; 
  margin-bottom: 10px;
}

.grafana-iframe {
  width: 100%;
  height: 400px; 
  border: none;
}
/*home */

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fafafa;
}


.team-section {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 20px;
  margin-top: 30px;
}

.team-section h2 {
  text-align: center;
  margin-bottom: 20px;
}


.team-members {
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap; 
  width: 100%;
  gap: 20px; 
}
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px; 
  margin: 10px;
}

.team-member img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.team-member p {
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  margin: 0; 
  font-size: 18px; 
  font-weight: bold; 
}
.team-member h3 {
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  margin: 5px 0; 
  font-size: 18px; 
  font-weight: bold; 
  text-align: center; 
}


/* 프로젝트 설명 섹션 */
.project-description {
  background-color: #f0f0f0;
  padding: 40px;
  margin: 30px auto;
  max-width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.project-description h2 {
  margin-bottom: 20px;
}

.project-description p {
  color: #333;
  line-height: 1.6;
}

/* 프로젝트 이미지 섹션 */
.project-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.project-item {
  width: 48%;
  text-align: center;
  margin-bottom: 20px;
}

.project-item img {
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  margin-bottom: 10px;
}

.project-item p {
  color: #555;
}
