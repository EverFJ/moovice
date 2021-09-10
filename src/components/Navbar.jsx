import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Moovice
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weekly">
                Weekly
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weekly-battle">
                Weekly Battle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/popular">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/popular-battle">
                Popular Battle
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
