import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

import { FaBookMedical, FaHome, FaHospital, FaMedkit, FaSignOutAlt, FaUser, FaUserInjured } from 'react-icons/fa';
import { colors } from "@mui/material";

const Menu = () => {
  return (
    <div className="menu">
      {/* Dashboard */}
      <div className="item">
        <span style={{ color: 'black' }} className="title">Dashboard</span>
        <Link to="/" className="listItem">
          <FaHome />
          <span className="listItemTitle">Home</span>
        </Link>
      </div>

      {/* Data Management */}
      <div className="item">
        <span className="title" style={{ color: 'black' }}>Data Management</span>
        <Link to="/patients" className="listItem">
          <FaUserInjured/>
          <span className="listItemTitle">Patients</span>
        </Link>
        
      </div>

    

      {/* Resources */}
      <div className="item">
        <span className="title" style={{ color: 'black' }}>Resources</span>
        <Link to="/centers" className="listItem">
          <FaHospital/>
          <span className="listItemTitle" >Centers</span>
        </Link>
      </div>




      {/* Logout */}
      <div className="item">
        <span className="title" style={{ color: 'black' }}>Logout</span>
        <Link to="/login_landing" className="listItem">
          <FaSignOutAlt/>
          <span className="listItemTitle">Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
