import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, arrayUnion } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC_cvTnwOfAEiAsQZxV898YGLZQgP1moso",
  authDomain: "probist-4d9fb.firebaseapp.com",
  projectId: "probist-4d9fb",
  storageBucket: "probist-4d9fb.appspot.com",
  messagingSenderId: "1010592949396",
  appId: "1:1010592949396:web:46d001895bd7cb01194081",
  measurementId: "G-VRRV17F6Y8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const updateFireStore = async (roomRef, text, email, bot=false) => {
  
  try {
    updateDoc(roomRef, { 
      messages: arrayUnion({
        text,
        user: bot ? 'NIxkW04WGF2MX084MCFTGM' : email,
        createdAt: new Date().toISOString(),
      }),
    });
    
  } catch (error) {
    console.error(error);
  }
};

