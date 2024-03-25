import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // <div className="navbar navbar-expand-lg navbar-light bg-light shape">
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary navbar-inverse navbar-fixed-top">
        <Link className="navbar-brand" to="/">
          HEALING
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse left"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/contactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    // </div>
  )
}