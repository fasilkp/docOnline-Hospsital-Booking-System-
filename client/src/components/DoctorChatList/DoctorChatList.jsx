import React from 'react'
import { Link } from 'react-router-dom' 

export default function DoctorChatList({ users, lastMessage, setChatClicked, chatClicked }) {
  const defaultImg="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
  return (
    <div className={`col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 chat-list ${chatClicked && 'hide-sec'}`}>
      <div className="">
        <div className="input-group srch rounded mb-3">
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search" />
          </span>
        </div>
        <div data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: 400 }}>
          <ul className="list-unstyled mb-0">

            {
              users && users[0] &&
              users.map((chat, index) => {
                return (
                  <li className="p-2 border-bottom">
                    <Link to={"/account/doctor/chat?id="+chat.userId._id} onClick={()=>setChatClicked(true)} className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <div>
                          <img src={chat?.userId?.picture ? chat?.userId?.picture : defaultImg } alt="avatar" className="d-flex align-self-center me-3 chat-avatar" width={60} />
                          <span className="badge bg-warning badge-dot" />
                        </div>
                        <div className="pt-1">
                          <p className="fw-bold mb-0">{chat.userId.name}</p>
                          <p className="small text-muted">
                            {lastMessage[chat._id]}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">5 mins ago</p>
                        <span className="badge bg-danger rounded-pill float-end">2</span>
                      </div>
                    </Link>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div>
    </div>
  )
}