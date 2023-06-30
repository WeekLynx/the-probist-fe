import React, { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const INITIAL_STATE = {
    chatList: [],
    messages: [],
    chatsRef: null,
    personalities: null,
    subCollection: uuid()
}

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHAT': 
        // send chat to the db 
        return {...state, chatList: [...state.chatList, action.payload]}  
    case 'SET_MESSAGES': 
        return { ...state, messages: action.payload };
      
    case 'SET_CHATREF': 
        return {...state, chatsRef: action.payload};

    case 'SET_PERSONALITY':
        console.log('SET_PERSONALITY');
        const { email } = action.payload
        const chatsRef = doc(db, "personalities", email, state.subCollection, "messages");
        // const chatsRef = doc(db, "personalities", email, state.subCollection, "messages");
        setDoc(chatsRef, {});
        return {...state, personalities: action.payload, chatsRef};
      
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