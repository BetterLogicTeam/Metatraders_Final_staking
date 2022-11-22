import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light navbar_bg">
  <div class="container-fluid px-5">
    <a class="navbar-brand " href="#"><img src='images/Logo.png'  width="100%" />  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#About">ABOUT</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#Traders">TRADERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Reward"> REWARDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#Roadmap">ROADMAP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">SOCIALS</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href="#">MANAGE </a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
