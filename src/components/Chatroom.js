import React, { useState, useEffect } from 'react';

function Chatroom() {


{/* <ul>
  {object.map((person) => (
    <li key={person.name} className="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3)' }}>
      <a href="#!" className="d-flex justify-content-between link-dark">
        <div className="d-flex flex-row">
          <img src={person.avatar} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
          <div className="pt-1">
            <p className="fw-bold mb-0">{person.name}</p>
            <p className="small text-black">{person.message}</p>
          </div>
        </div>
        <div className="pt-1">
        </div>
      </a>
    </li>
  ))}
</ul> */}


  return (
    <section class="gradient-custom">
      <div class="container py-5 custom-container">

        <div class="row">

          <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0 people-list">
            <div className="mask mask-custom">
              <div className="card-body custom-card-body">

                <ul class="list-unstyled mb-0">
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">John Doe</p>
                          <p class="small text-black">Hello, Are you there?</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Just now</p>
                        <span class="badge bg-danger float-end">1</span>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Danny Smith</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">5 mins ago</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Alex Steward</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Ashley Olsen</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Kate Moss</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Lara Croft</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2">
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Brad Pitt</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">5 mins ago</p>
                        <span class="text-black float-end"><i class="fas fa-check" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">John Doe</p>
                          <p class="small text-black">Hello, Are you there?</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Just now</p>
                        <span class="badge bg-danger float-end">1</span>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Danny Smith</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">5 mins ago</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                    <a href="#!" class="d-flex justify-content-between link-dark">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Alex Steward</p>
                          <p class="small text-black">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-black mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                </ul>
                
              </div>
              <h5 className="font-weight-bold mb-2 mt-2 text-center text-black">Interviewee</h5>
            </div>
          </div>

          <div class="col-md-6 col-lg-7 col-xl-7 conversation-box">
            <div data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '675px', overflowY: 'auto' }}>
              <ul class="list-unstyled text-black ">
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
                <li class="d-flex justify-content-between mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                    class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                  <div class="card mask-custom">
                    <div class="card-header d-flex justify-content-between p-2"
                      style={{ borderBottom: '1px solid rgba(255,255,255,.3)' }}>
                      <p class="fw-bold mb-0">Brad Pitt</p>
                      <p class="text-light small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
                    </div>
                    <div class="card-body">
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                    class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                  <div class="card mask-custom">
                    <div class="card-header d-flex justify-content-between p-2"
                      style={{ borderBottom: '1px solid rgba(255,255,255,.3);' }}>
                      <p class="fw-bold mb-0">Brad Pitt</p>
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
                <li class="d-flex justify-content-between mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                    class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                  <div class="card mask-custom">
                    <div class="card-header d-flex justify-content-between p-2"
                      style={{ borderBottom: '1px solid rgba(255,255,255,.3)' }}>
                      <p class="fw-bold mb-0">Brad Pitt</p>
                      <p class="text-light small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
                    </div>
                    <div class="card-body">
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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

export default Chatroom;
