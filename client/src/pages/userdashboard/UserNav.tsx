import React, { useEffect } from "react";
import { FaUser, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./userNav.scss";

const Navbar = () => {
  useEffect(() => {
    // Dynamically import Bootstrap styles
    import("bootstrap/dist/css/bootstrap.min.css");
    // Dynamically import Bootstrap JavaScript
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src="logo.svg" alt="" />
        </Link>
        <h1 className="navbar-title">NashaMukti</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <FaHome />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Features
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/basketball-court">
                    Patients
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/football-ground">
                    Centers
                  </Link>
                </li>
          
              </ul>
            </li>
          </ul>
        </div>

        <Link to="/login_landing" className="user-icon">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
