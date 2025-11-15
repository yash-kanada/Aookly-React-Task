import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  const savedUser = JSON.parse(localStorage.getItem("user"))

  const logout = () =>{
    localStorage.removeItem("user");
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-custom">
        <div className="container-fluid text-light d-flex align-items-center justify-content-between">

          <div className="d-flex align-items-center gap-3">

            <button
              className="bg-transparent rounded px-2"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              aria-controls="offcanvasScrolling"
            >

              <i className="bi bi-list fs-4 text-light"></i>
            </button>
            <div className="navbar-brand text-light fs-5">Banas CANDO</div>
          </div>

          <div className="d-flex align-items-center gap-4">

            <div className="dropdown">
              <button
                className="bg-transparent text-light dropdown-toggle border-0"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell-fill fs-5"></i>
                <span className="badge bg-danger ms-1">15</span>
              </button>

              <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                <li className="dropdown-item">Notification 1</li>
                <li className="dropdown-item">Notification 2</li>
                <li className="dropdown-item">Notification 3</li>
              </ul>
            </div>

            {!savedUser && <button className='btn btn-outline-light' onClick={() => navigate('/')}>Log in</button>}
            
            {savedUser && <div className="dropdown">
              <button
                className="bg-transparent text-light dropdown-toggle border-0"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill fs-5"></i> {savedUser.fullName}
              </button>

              <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                <li className="dropdown-item"><i className="bi bi-image me-1"></i>Change Profile/ Password</li>
                <li className="dropdown-item" onClick={logout}><i className="bi bi-power me-1"></i>Log Out</li>
              </ul>
            </div>}

          </div>
        </div>
      </nav>

      {/* sidebar  */}
      <div className="offcanvas offcanvas-start offcanvas-custom w-auto" tabIndex="-1" id="offcanvasExample" data-bs-scroll="true" aria-labelledby="offcanvasScrollingLabel" data-bs-backdrop="false">
        <div className="offcanvas-body" >
          <ul className='list-unstyled '>

            <li className='li-custom' onClick={()=>navigate('/home')}><i className="bi bi-house-door-fill me-1" ></i>Home</li>


            <li >
              <div className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ps-0 pb-0 li-custom"
                data-bs-toggle="collapse"
                data-bs-target="#masterCollapse"
                aria-expanded="false">
                <i className="bi bi-folder me-1"></i>
                Master
                <i className="bi bi-caret-down-fill pt-1" style={{ fontSize: "10px" }}></i>
              </div>
              <div className="collapse" id="masterCollapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal  ps-2">
                  <li>
                    <div className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ps-0 li-custom"
                      data-bs-toggle="collapse"
                      data-bs-target="#employeesCollapse"
                      aria-expanded="false">
                      <i className="bi bi-building-lock"></i>
                      Employees
                      <i className="bi bi-caret-down-fill pt-1" style={{ fontSize: "10px" }}></i>
                    </div>
                    <div className="collapse" id="employeesCollapse">
                      <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-2 ">
                        <li >
                          <div className="link-body-emphasis d-inline-flex text-decoration-none rounded li-custom" onClick={() => navigate('/new-emp')}>New</div>
                        </li>
                        <li >
                          <div className="link-body-emphasis d-inline-flex text-decoration-none rounded li-custom" onClick={() => navigate('/emp-filter')}>Filter</div>
                        </li>
                        <li >
                          <div className="link-body-emphasis d-inline-flex text-decoration-none rounded li-custom" onClick={() => navigate('/import-emp')}>Import </div>
                        </li>
                        <li >
                          <div className="link-body-emphasis d-inline-flex text-decoration-none rounded li-custom" onClick={() => navigate('/emp-transfer')}>Employee Transfer </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

          </ul>


        </div>
      </div>

    </>
  )
}

export default Header
