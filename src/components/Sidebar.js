import React, { useState } from 'react';
import "../App.css";
import ModalForm from './ModalForm';
import Login from './Login';
import Logout from './Logout';

function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
            <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5">The<span className="d-none d-sm-inline"> Probist</span></span>
            </a>
            <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
              <Login /> <Logout />
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
                <button className="nav-link px-sm-0 px-2" onClick={openModal}>
                  <i className="bi bi-journal-plus"></i>
                  <span className="ms-1 d-none d-sm-inline">New Interview</span>
                </button>
              </li>
              <li>
                <button className="nav-link px-sm-0 px-2">
                  <i className="bi bi-journal-minus"></i>
                  <span className="ms-1 d-none d-sm-inline">Delete Interview</span>
                </button>
              </li>
              <li>
                <a href="#" className="nav-link px-sm-0 px-2">
                  <i className="bi bi-info-square"></i><span className="ms-1 d-none d-sm-inline">About Us</span> </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col d-flex flex-column h-sm-100">
          <main className="row overflow-auto">
            <div className="col pt-4">
              <h3>Simulate an interview with anyone! Maybe.</h3>
              <p className="lead">Give the name of someone you want to interview, the objective the questions should lead to, and the overall goal of the interview. </p>
              <hr />
              <h3>Click New Interview in the side menu to start!</h3>
              <p>Inside this p tag should be the chatbox that displays between both parties and fills up the majority of the page.</p>
            </div>
          </main>
          <footer className="row bg-light py-4 mt-auto">
            <div className="col">Created with OpenAI API and our big fat brains</div>
          </footer>
        </div>
      </div>
      <ModalForm showModal={showModal} closeModal={closeModal} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Sidebar;


{/* 
// function Sidebar() {
//   return (
//     <div classNameName="Sidebar">
//       <ul classNameName="SidebarList">
//         {SidebarData.map((val, key) => {
//           return (
//             <li key={key}
//               classNameName="row"
//               id={window.location.pathname == val.link ? "active" : ""}
//               onClick={() => { window.location.pathname = val.link }}>
//               <div>
//                 {val.icon}
//                 {val.title}
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar */}