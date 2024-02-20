import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className="navbar-title">GLIS</div> */}
      <div className="navbar-links">
        {/* <a href="/home" className="navbar-link">Home</a> */}
        {/* <a href="/data" className="navbar-link" >
          <FontAwesomeIcon icon={faChartLine}  /> Data 
        </a>
        <a href="/user" className="navbar-link">
          <FontAwesomeIcon icon={faUser} /> User
        </a> */}
        <Link to="/" className="navbar-title">GLIS</Link>
        <Link to="/data" className="navbar-link"><FontAwesomeIcon icon={faChartLine}/>Data</Link>
      </div>
    </div>
  );
};

export default Navbar;
