import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from './ChatContext'
import { updateFireStore } from './firebase'
import { useAuth0 } from '@auth0/auth0-react';
import { onSnapshot } from "firebase/firestore";

const RenderMsg = ({messages}) =>{
  return (
    <div data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '675px', overflowY: 'auto' }}>
              <ul class="list-unstyled text-black ">
                {messages?.map((message)=>(
                  message.user === 'NIxkW04WGF2MX084MCFTGM' ? (
                    <li class="d-flex justify-content-between mb-4">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                        class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                      <div class="card mask-custom">
                        <div class="card-header d-flex justify-content-between p-2"
                          style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                          <p class="fw-bold mb-0 pl-2">Brad Pitt</p>
                          <p class="text-light small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
                        </div>
                        <div class="card-body">
                          <p class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                  ) :(
                  <li class="d-flex justify-content-between mb-4">
                    <div class="card mask-custom w-100">
                      <div class="card-header d-flex justify-content-between p-2"
                        style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                        <p class="fw-bold mb-0">Lara Croft</p>
                        <p class="text-light small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
                      </div>
                      <div class="card-body">
                        <p class="mb-0">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                          laudantium.
                        </p>
                      </div>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60"></img>
                  </li>
                  )
                ))}
              </ul>
            </div>
  )
}

function Chat({chatHistory}) {
  const { user } = useAuth0();
  const { state, dispatch } = useContext(ChatContext);
  const { chatList, messages, chatsRef, personalities } = state


  useEffect(() => {
    
    if (chatList.length < 1) {
      const greet = `Hello ${user.name}, ask your questions`
      dispatch({ type: 'SET_CHAT', payload: [
        { role: 'system', content: "Fill in the key value of the following template by using their current value, reference the value inside the name property so you know who you're filling it out for then return the the object back with no changes to the formatting" }, 
        { role: 'assistant', content: greet }
      ] })
      updateFireStore(chatsRef, greet, user.email, true);
    }
  }, [chatsRef]) //eslint-disable-line


  useEffect(() => { 
    if (!chatsRef) return;
    const unsub = onSnapshot(chatsRef, (doc) => {
      if (doc.exists() && Object.keys(doc.data().messages || {}).length > 0) {
        dispatch({ type: 'MESSAGES', payload: doc.data().messages });
      }

    });

    return () => {
      unsub();
    };

  },[chatsRef]);  //eslint-disable-line

  return (
    <section class="gradient-custom">
      <div class="container py-5 custom-container">

        <div class="row">

          <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0 people-list">
            <div className="mask mask-custom">
              <div className="card-body custom-card-body">
              
                <ul class="list-unstyled mb-0">
                  {personalities?.map((personality) =>(
                    <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                      <a href="#!" class="d-flex justify-content-between link-dark">
                        <div class="d-flex flex-row">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                          <div class="pt-1">
                            <p class="fw-bold mb-0">{personality.name}</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>


              </div>
              <h5 className="font-weight-bold mb-2 mt-2 text-center text-black">Interviewee</h5>
            </div>
          </div>

{/* live chat section below */}

          <div class="col-md-6 col-lg-7 col-xl-7 conversation-box">
            <RenderMsg messages={messages} />
            <div class="form-outline form-white mt-1">
              <textarea class="form-control" id="textAreaExample3" rows="4"></textarea>
            </div>
            <button type="button" class="btn btn-light btn-lg btn-rounded float-end mt-3">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
