import React from 'react'
import logo from '../IT POWER-01.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-secondary navbar-dark py-3 fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">PORTFOLIO</a>
    
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#learn">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#questions">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#instructors">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
