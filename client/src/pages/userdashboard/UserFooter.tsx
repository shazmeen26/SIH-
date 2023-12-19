import React from "react";
import "./userfooter.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-first">
          <h1>NashaMukti</h1>
          <div className="footer-links">
            

            

            <h4>Contact Helpline: 1800-11-0031</h4>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        Copyright &#169; www.nashamukti.com | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;