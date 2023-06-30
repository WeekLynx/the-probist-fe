import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import "../App.css";
import "../Chatroom.css";

import Logout from './Logout';

import Profile from './Profile';
import trashcan from '../trash-can.png';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interviews: [],
    }
  }
  componentDidMount() {
    this.getAllInterviews();
  }
  getAllInterviews = async () => {
    let url = `${process.env.REACT_APP_BACKEND_URL}/interviews`
    try {
      let interviewsFromDB = await axios.get(url);
      this.setState({
        interviews: interviewsFromDB.data
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  deleteInterview = async (id) => {
    let url = `${process.env.REACT_APP_BACKEND_URL}/interviews/${id}`;

    try {
      await axios.delete(url);
      let updatedInterview = this.state.interviews.filter(interview => interview._id !== id);
      this.setState({
        interviews: updatedInterview
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
              <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5">The<span className="d-none d-sm-inline"> Probist</span></span>
              </a>
              <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                <div className="profile-container"><Profile /></div>
                <Logout />
                <li className="nav-item">
                  <Link to="/" className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li>
                  {/* <button className="nav-link px-sm-0 px-2" onClick={openModal}>
                  <i className="bi bi-journal-plus"></i>
                  <span className="ms-1 d-none d-sm-inline">New Interview</span>
                </button> */}
                </li>
                {/* <li>
                <button className="nav-link px-sm-0 px-2">
                  <i className="bi bi-journal-minus"></i>
                  <span className="ms-1 d-none d-sm-inline">Delete Interview</span>
                </button>
              </li> */}
                <li>
                  <Link to="/AboutUs" className="nav-link px-sm-0 px-2">
                    <i className="bi bi-info-square"></i><span className="ms-1 d-none d-sm-inline">About Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
              <div className="col pt-4">
                <h3>Past Interviews</h3>

                <hr />
                <article>
                  {this.state.interviews.length ?
                    this.state.interviews.map(interview => (
                      <>
                      {/* {console.log(auth0.user.email)} */}
                      {/* {interview.email === Profile.user.email ? `${interview.intervieweeName} <img onClick=${() => this.deleteInterview(interview._id)} src='./public/img/trash-can.png' alt='trash can to delete interview' />` : interview.intervieweeName} */}
                        <div>
                          <h3>{interview.intervieweeName}</h3> 
                          <img className='delete' onClick={() => this.deleteInterview(interview._id)} src={trashcan} alt='trash can to delete interview' />
                        </div>
                        <ul>
                          {interview.questions.map(question => (<li>{question}</li>))}
                        </ul>
                      </>
                    ))
                    :
                    <h3>No Interviews Found</h3>
                  }
                </article>
              </div>
            </main>
            <footer className="row bg-light py-4 mt-auto">
              <div className="col">Created with OpenAI API and our big fat brains</div>
            </footer>
          </div>
        </div>
        {/* <ModalForm showModal={showModal} closeModal={closeModal} handleSubmit={handleSubmit} /> */}
      </div>
    )
  }

}

export default Dashboard;