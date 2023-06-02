import React from 'react'
import { Link } from 'react-router-dom'

export default function ChatList({ users }) {
  const defaultImg="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 chat-list">
      <div className="p-3">
        <div className="input-group srch rounded mb-3">
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search" />
          </span>
        </div>
        <div data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: 400 }}>
          <ul className="list-unstyled mb-0">

            {
              users[0] &&
              users.map((user, index) => {
                return (
                  <li className="p-2 border-bottom">
                    <Link to={"/chat?id="+user.doctorId._id} className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <div>
                          <img src={user.doctorId.image ? user.doctorId.image.url : defaultImg } alt="avatar" className="d-flex align-self-center me-3 chat-avatar" width={60} />
                          <span className="badge bg-warning badge-dot" />
                        </div>
                        <div className="pt-1">
                          <p className="fw-bold mb-0">{user.doctorId.name}</p>
                          <p className="small text-muted">
                            Lorem ipsum dolor sit.
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
