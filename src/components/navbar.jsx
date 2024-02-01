// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'; // Import the necessary solid icons
import './css/navbar.css'; // Import Navbar CSS

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">GLIS</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">Home</a>
        <a href="#" className="navbar-link">
          <FontAwesomeIcon icon={faChartLine} /> Dashboard
        </a>
        <a href="#" className="navbar-link">
          <FontAwesomeIcon icon={faUser} /> User
        </a>
      </div>
      {/* <button className="navbar-button">Account</button> */}
    </div>
  );
};

export default Navbar;
