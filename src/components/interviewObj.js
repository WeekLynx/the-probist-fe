let interviewObj = {};


export const updateInterviewObj = (data) => {
  interviewObj = { ...interviewObj, ...data };
};

export const getInterviewObj = () => {
  return interviewObj;
};

export const createInterviewTemplate = (formData) => {
  console.log(formData);
  const interviewTemplate = {
    user: {
      name: formData.user.name,
      email: formData.user.email,
    },
    person: {
      name: formData.intervieweeName,
      personality: {
        knowledgeBase: 'Specific areas of knowledge possessed by the interviewee',
        influencesAndInspirations: 'Influences and inspirations for the interviewee',
        uniqueInsightsOrPerspectives: 'Unique insights or perspectives offered by the interviewee',
        currentRelevance: 'Current relevance or standing of the interviewee',
        interactionsWithPeersAndCritics: 'Interactions of the interviewee with peers and critics',
        personalBackground: 'Personal background of the interviewee',
        publicPersona: 'Public persona or image of the interviewee',
        articulationStyle: 'Articulation style of the interviewee',
        senseOfHumor: 'Sense of humor displayed by the interviewee',
        intellectualContributions: 'Intellectual contributions made by the interviewee',
        currentEventsEngagement: 'Engagement of the interviewee with current events',
        fallacies: [`insert list of fallacies the interviewee uses`],
        rhetoricalStrategies: 'Rhetorical strategies employed by the interviewee',
        argumentativeStyle: 'Overall argumentative style of the interviewee',
        debateTactics: 'Specific debate tactics employed by the interviewee',
        responsePatterns: 'Typical response patterns to different types of questions or challenges',
        emotionalTriggers: 'Topics or arguments that trigger strong emotional responses from the interviewee',
        responseToCounterarguments: 'How the interviewee handles counterarguments',
      },
      
    },
    interviews: [
      {
        intervieweeName: formData.intervieweeName,
        topics: formData.topics,
        goal: formData.goal,
        tone: formData.tone,
        questionsAndAnswers: [
          {
            question: '',
            answer: '',
          },
        ],
      },
    ],
  };

  return interviewTemplate;
};
