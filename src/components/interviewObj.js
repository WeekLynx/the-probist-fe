let interviewObj = {};










export const updateInterviewObj = (data) => {
  interviewObj = { ...interviewObj, ...data };
};

export const getInterviewObj = () => {
  return interviewObj;
};

export default interviewObj;
