// Sidebar.js
import React from 'react';
import './css/sidebar.css'; // Import Sidebar CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">Dashboard</li>
        <li className="sidebar-list-item">Reports</li>
        <li className="sidebar-list-item">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
