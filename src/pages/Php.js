import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Php() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API 호출하여 데이터 가져오기
    axios
      .get("http://192.168.0.9/data.php")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <Header />
      <h1>Color Detection Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Red Count</th>
            <th>Yellow Count</th>
            <th>Blue Count</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.red_count}</td>
              <td>{row.yellow_count}</td>
              <td>{row.blue_count}</td>
              <td>{new Date(row.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Php;
