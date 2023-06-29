import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
    chatList: [],
    messages: [],
    chatsRef: null,
    personalities: null,
}

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHAT': 
        // send chat to the db 
        return {...state, chatList: [...state.chatList, action.payload]}  
    case 'SET_MESSAGES': 
        return { ...state, messages: action.payload };
      
    case 'SET_CHATREF': 
        return {...state, chatsRef: action.payload}  
    case 'SET_PERSONALITY': 
        return {...state, personalities: action.payload}  
      
    default:
      return state;
  }
};

export const ChatContext = createContext(INITIAL_STATE);


export const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};