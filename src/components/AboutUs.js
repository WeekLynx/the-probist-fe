import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../About.css';

function AboutUs() {
  // Replace the team data with actual data
  const team = [
    // Add team members here
  ];

  return (
    <div className="container mt-5">
      <div className="header-container" style={{ marginBottom: '-750px' }}>
        <Header />
      </div>
      <div className="sidebar-container" style={{ zIndex: '2', position: 'absolute', left: '0' }}>
        <div className="container-fluid overflow-hidden">
          <div className="row vh-100 overflow-auto">
            <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
              <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5">The<span className="d-none d-sm-inline"> Probist</span></span>
                </a>
                <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link px-sm-0 px-2">
                      <i className="fs-5 bi bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                      <i className="fs-5 bi bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                  </li>
                  <li>
                    <button className="nav-link px-sm-0 px-2">
                      <i className="bi bi-journal-minus"></i>
                      <span className="ms-1 d-none d-sm-inline">Delete Interview</span>
                    </button>
                  </li>
                  <li>
                    <Link to="/AboutUs" className="nav-link px-sm-0 px-2">
                      <i className="bi bi-info-square"></i><span className="ms-1 d-none d-sm-inline">About Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container my-5 py-5 bg-light">
        <h3>Team introduction...</h3>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Gerald.png" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Gerald</h5>
              <p className="card-text">Some information about builder 1.</p>
              <a href="https://github.com/NephilimEyez" target="_blank" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" target="_blank" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Cooper.jpg" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Dylan Cooper</h5>
              <p className="card-text">Some information about builder 1.</p>
              <a href="https://github.com/Cooper-Softdev" target="_blank" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" target="_blank" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Kyle.jpg" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Kyle Knight</h5>
              <p className="card-text">Some information about builder 1.</p>
              <a href="https://github.com/mrkyleknight" target="_blank" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" target="_blank" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src="img/About/Alex.jpg" alt="Builder 1" />
            <div className="card-body">
              <h5 className="card-title">Alex Chao</h5>
              <p className="card-text">Some information about builder 1.</p>
              <a href="https://github.com/AlexSaeChao" target="_blank" className="card-link">GitHub</a>
              <a href="https://linkedin.com/in/builder1" target="_blank" className="card-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container my-5 py-5 bg-light">
        <h3>We are a team of four technology enthusiasts with diverse skills and experiences, united by our passion for creating impactful digital solutions. Our team includes a diligent front-end maestro known for clean, intuitive interfaces, and a full-stack genius who masterfully oversees the intricate interplay between front-end and back-end technologies.

          On the data side, our back-end guru breathes life into our platform with expertise in machine learning and natural language processing. The visual appeal and usability of our product are the result of our UX/UI expert who believes in creating meaningful experiences, not just products.

          Together, we've poured our shared passion into creating InterviewIQ, an AI-powered platform designed to revolutionize journalism. InterviewIQ is the product of hard work, innovation, and a relentless pursuit of excellence.
        </h3>
      </div>
    </div>
  );
}

export default AboutUs;
