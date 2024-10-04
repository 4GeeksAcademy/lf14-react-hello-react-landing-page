import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-bg-dark p-3" href="#">Landing Page</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSelector" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active link-secondary" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#">Contact</a>
          </li>
        </ul>
      </div>
    
  </nav>
  )
}

export default Navbar