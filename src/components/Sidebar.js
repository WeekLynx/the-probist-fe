import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import "../Chatroom.css";
import ModalForm from './ModalForm';
import Logout from './Logout';
import Chatroom from './Chatroom';
import Chat from './Chat';
import Profile from './Profile';
import { createInterviewTemplate } from './interviewObj';
import { useAuth0 } from '@auth0/auth0-react';
// import { updateInterviewObj, getInterviewObj } from './interviewObj';
import { ChatContext } from './ChatContext'

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated, user} = useAuth0();
  const { state, dispatch } = useContext(ChatContext);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const obj = {
      "user": {
          "name": "Dylan Cooper",
          "email": "cooper.softdev@gmail.com"
      },
      "person": {
          "name": "superman",
          "personality": {
              "knowledgeBase": "Specific areas of knowledge possessed by the interviewee",
              "influencesAndInspirations": "Influences and inspirations for the interviewee",
              "uniqueInsightsOrPerspectives": "Unique insights or perspectives offered by the interviewee",
              "currentRelevance": "Current relevance or standing of the interviewee",
              "interactionsWithPeersAndCritics": "Interactions of the interviewee with peers and critics",
              "personalBackground": "Personal background of the interviewee",
              "publicPersona": "Public persona or image of the interviewee",
              "articulationStyle": "Articulation style of the interviewee",
              "senseOfHumor": "Sense of humor displayed by the interviewee",
              "intellectualContributions": "Intellectual contributions made by the interviewee",
              "currentEventsEngagement": "Engagement of the interviewee with current events",
              "fallacies": [
                  "insert list of fallacies the interviewee uses"
              ],
              "rhetoricalStrategies": "Rhetorical strategies employed by the interviewee",
              "argumentativeStyle": "Overall argumentative style of the interviewee",
              "debateTactics": "Specific debate tactics employed by the interviewee",
              "responsePatterns": "Typical response patterns to different types of questions or challenges",
              "emotionalTriggers": "Topics or arguments that trigger strong emotional responses from the interviewee",
              "responseToCounterarguments": "How the interviewee handles counterarguments"
          }
      },
      "interviews": [
          {
              "intervieweeName": "superman",
              "topics": "kryptonian",
              "goal": "why are they so fast?",
              "tone": "empathic",
              "questionsAndAnswers": [
                  {
                      "question": "",
                      "answer": ""
                  }
              ]
          }
      ]
  }
  axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/parse-interview-template`, 
    obj
  ).then((res)=>{
    console.log('RESPONSE:', res);
  }).catch((err)=>console.log(err))
  
  }, [])
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { name, topic, goal, tone } = event.target;
  
    if (name && topic && goal && tone) {
      
      const interviewObj = {
        intervieweeName: name.value,
        topics: topic.value,
        goal: goal.value,
        tone: tone.value,
      };
      
      if (isAuthenticated) {
        interviewObj.user={name:user.name, email:user.email};
      }
      
      try {
        
        const interviewTemplate = createInterviewTemplate(interviewObj);
        // console.log("OBJ:",interviewTemplate);
        // const interviewTemplateString = JSON.stringify(interviewTemplate);
        // console.log(interviewTemplateString);
        // await axios.post(`${process.env.REACT_APP_BACKEND_URL}/parse-interview-template`, interviewTemplate);
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/parse-interview-template`, 
          interviewTemplate
        ).then((res)=>{
          dispatch({type: 'SET_PERSONALITY', payload: res})
        }).catch((err)=>console.log(err))
        
      } catch (error) {
        console.error('Error sending template to backend:', error);
      }
    } else {
      console.log('Complete the form before submitting.');
    }
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
              <div className="profile-container"><Profile /></div>
              <Logout />
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
              <h3>Simulate an interview with anyone!</h3><h3> Click New Interview in the side menu to start!</h3>

              <hr />
              <article>
                <Chat />
              </article>
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
