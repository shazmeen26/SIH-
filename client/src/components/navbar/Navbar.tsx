import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="logo.svg" alt="" />
        <span>NashaMukti</span>
      </Link>
      <div className="icons">
       
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <Link to="/login_landing" className="user">
          <FaUserAlt />
          <span>Aryaan</span>
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;