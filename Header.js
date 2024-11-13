import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // 스타일 추가를 위해 CSS 파일을 생성할 수 있습니다.

function Header() {
  return (
    <header className="App-header">
      <h1>AI 기반 자동 분류 시스템</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grafana">Grafana</Link></li>
          <li><Link to="/php">PHP</Link></li>
          <li><Link to="/camera">Camera</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
