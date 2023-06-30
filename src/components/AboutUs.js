import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../About.css';
import "../App.css";
import "../Chatroom.css";

function AboutUs() {
  return (
    <div className="About">
      <div className="sidebar-container" style={{ width: '16%', height: '100vh', position: 'fixed', background: '#333', color: '#fff' }}>
        {/* Sidebar content */}
        <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
          <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5">The<span className="d-none d-sm-inline"> Probist</span></span>
          </a>
          <li>
                <Link to="/dashboard" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                  <i className="fs-5 bi bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
          <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
              <Link to="/" className="nav-link px-sm-0 px-2">
                <i className="fs-5 bi bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="nav-link px-sm-0 px-2">
                <i className="bi bi-info-square"></i><span className="ms-1 d-none d-sm-inline">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ marginLeft: '20%', overflow: 'auto' }}>
        <Header />
        <div className="container mt-5">
        <div className="my-5 py-5 bg-light">
        <div className="my-2 py-2 bg-light text-center">
        <h2 style={{ fontFamily: 'CoolFont, cursive', fontSize: '3rem' }}>Team</h2>
            </div>

      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Gerald.png" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Gerald Bruno</h5>
              <p className="card-text">Versatile professional with diverse experience in customer service, problem-solving, and critical thinking. Transitioning into programming, leveraging skills from the military, contracting, and retail fields to create strong innovative solutions. But not strong internet.</p>
              <a href="https://github.com/NephilimEyez" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Cooper.jpg" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Dylan Cooper</h5>
              <p className="card-text">Aspiring software developer with background in Air Traffic Control and military. I am a self-starter, and attempt very hard to produce quality and maintainable code. I'm always interested in learning new technologies.</p>
              <a href="https://github.com/Cooper-Softdev" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Kyle.jpg" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Kyle Knight</h5>
              <p className="card-text">I'm a seasoned truck driver who's traded in the open roads for open source, venturing into the world of software development.</p>
              <a href="https://github.com/mrkyleknight" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Alex.jpg" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Alex Chao</h5>
              <p className="card-text">A former military member turned passionate graphic designer, pivoting to full-stack developer.</p>
              <a href="https://github.com/AlexSaeChao" className="card-link">GitHub</a>
              <a href="https://www.linkedin.com/in/alex-chao-314698182" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 py-3 bg-light">
        <h3>We are a team of four technology enthusiasts with diverse skills and experiences, united by our passion for creating impactful digital solutions. Together, we've poured our shared passion into creating InterviewIQ, an AI-powered platform designed to revolutionize journalism. InterviewIQ is the product of hard work, innovation, and a relentless pursuit of excellence.</h3>
      </div>
    </div>
  </div>
  <footer className="row bg-light py-4 mt-auto">
              <div className="col">The Probist © 2023. Utilizing OpenAI API. </div>
            </footer>
  </div>
  
  </div>
  
  
);
}

            
export default AboutUs;




