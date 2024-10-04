import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg bg-dark bg-gradient'>
    <div className='container-fluid'>
      <a className='navbar-brand text-white ms-lg-3'><span className='fs-4 align-middle fw-bold'>Landing Page</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSelector" aria-controls="navbarSelector" aria-expanded="false" aria-label="Toggle Navigator">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSelector">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className='nav-item'>
            <a id="home" role="button" className="nav-link text-start ms-5 ms-lg-0 fs-3 align-middle" aria-current="page" href="#">Home</a>
          </li>
          <li className='nav-item'>
            <a id="about" className="nav-link inactive text-start ms-5 ms-lg-0 fs-3 align-middle" aria-current="page" href="#">About</a>
          </li>
          <li className='nav-item'>
            <a id="services" className="nav-link inactive text-start ms-5 ms-lg-0 fs-3 align-middle" aria-current="page" href="#">Services</a>
          </li>
          <li className='nav-item'>
            <a id="contact" className="nav-link inactive text-start ms-5 ms-lg-0 me-lg-3 fs-3 align-middle" aria-current="page" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar