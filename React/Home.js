import React from 'react';
import './App.css'; 
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      
      {/* 팀 멤버 섹션 */}
      <div className="team-section">
	<h2>Team members </h2>
      <div className="team-members">
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/picture/choi.jpg`} alt="최예은" />
          <h3>인공지능SW융합 2학년 최예은</h3>
          <p>영상인식, 데이터베이스</p>
        </div>
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/picture/song.jpg`} alt="송한별" />
          <h3>인공지능SW융합 2학년 송한별</h3>
          <p>아두이노, 리액트</p>
        </div>
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/picture/no.jpg`} alt="노유성" />
          <h3>인공지능SW융합 2학년 노유성</h3>
          <p>영상인식, 데이터베이스</p>
        </div>
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/picture/son.jpg`} alt="손영진" />
          <h3>인공지능SW융합 2학년 손영진</h3>
          <p>아두이노, 리액트</p>
        </div>
       </div>
      </div>

      {/* 프로젝트 설명 섹션 */}
      <div className="project-description">
        <h2>About This Project</h2>
        <div className="project-images">
          <div className="project-item">
            <img src={`${process.env.PUBLIC_URL}/picture/arduino.jpg`} alt="Arduino" />
            <p>
              Arduino: 아두이노와 DC 모터 컨베이어 벨트 모형을 이용해서 물체를 이동시키고 
              거리 센서를 이용해서 물체를 멈추게 합니다.
            </p>
          </div>
          <div className="project-item">
            <img src={`${process.env.PUBLIC_URL}/picture/raspi.jpg`} alt="Raspberry Pi" />
            <p>
              Raspberry Pi 4: 라즈베리파이 4를 이용해 코드를 개발했습니다.
            </p>
          </div>
          <div className="project-item">
            <img src={`${process.env.PUBLIC_URL}/picture/camera.jpg`} alt="Camera" />
            <p>
              Camera: USB 카메라를 이용해 물체를 사진으로 찍어 OpenCV를 이용해
              물체를 인식하고 데이터를 활용하기 위해 저장합니다.
            </p>
          </div>
          <div className="project-item">
            <img src={`${process.env.PUBLIC_URL}/picture/project4.jpg`} alt="Project 4" />
            <p>
              Project 4: 이 프로젝트의 다른 구성 요소에 대한 설명입니다.
            </p>
          </div>
        </div>
        <p>
          이 프로젝트는 학교에서 배운 기술을 활용하여 다양한 하드웨어를 통합하고, 
          <strong>영상 인식 기술</strong>을 통해 자동화된 시스템을 구축하는 것을 목표로 합니다.
          <br />
          각 구성 요소는 서로 연동되어, 실시간으로 데이터를 처리하고 분석할 수 있습니다.
          <br />
          특히, <em>Arduino</em>와 <em>Raspberry Pi</em>는 센서 데이터 수집 및
          <em>카메라</em>는 비디오 스트리밍을 담당하여
          프로젝트의 핵심 기능을 수행합니다.
          <br />
          앞으로도 이러한 개발 경험으로 데이터 분석을 기반으로 한 
          <strong>AI 모델</strong>을 만들고 싶으며, 
          <em>사용자 경험 개선</em>을 위해 인터페이스를 직관적으로 만들고 싶습니다. 
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
