import React from 'react'
import axios from 'axios';
import interviewObj from './interviewObj';
import App from '../App';


const postInterview = async (interviewObj) => {
  try {
    const response = await axios.post('/api/interviews', interviewObj);

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const getStoredInterview = async (interviewId) => {
  try {
    const response = await axios.get(`/api/interviews/${interviewId}`);

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateInterview = async (interviewId, updatedInterviewObj) => {
  try {
    const response = await axios.put(`/api/interviews/${interviewId}`, updatedInterviewObj);

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteInterview = async (interviewId) => {
  try {
    const response = await axios.delete(`/api/interviews/${interviewId}`);

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const YourComponent = () => {
  postInterview(interviewObj);
  getStoredInterview('interviewId');
  updateInterview('interviewId', updatedInterviewObj);
  deleteInterview('interviewId');

  return (
    <div>
      {/* JSX stuffs */}
    </div>
  );
};

export default YourComponent;
