import React from 'react'
import axios from 'axios';

import { interviewObj } from './Sidebar';


const postInterview = async (interviewObj) => {
  try {
    // Send the interviewObj to the server
    const response = await axios.post('/api/interviews', interviewObj);

    // Handle the response as needed
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const getStoredInterview = async (interviewId) => {
  try {
    // Send a GET request to retrieve the stored interview schema object
    const response = await axios.get(`/api/interviews/${interviewId}`);

    // Handle the response as needed
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateInterview = async (interviewId, updatedInterviewObj) => {
  try {
    // Send a PUT request to update the interview with the provided interviewId
    const response = await axios.put(`/api/interviews/${interviewId}`, updatedInterviewObj);

    // Handle the response as needed
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteInterview = async (interviewId) => {
  try {
    // Send a DELETE request to delete the interview with the provided interviewId
    const response = await axios.delete(`/api/interviews/${interviewId}`);

    // Handle the response as needed
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const YourComponent = () => {
  // Example usage
  postInterview(interviewObj);
  getStoredInterview('interviewId');
  updateInterview('interviewId', updatedInterviewObj);
  deleteInterview('interviewId');

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default YourComponent;
