import React from 'react';
import './Sidebar.css'; // Import the corresponding CSS file

const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
