import React, { useState } from 'react';
import './SortButton.css';

const SortButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        Sort
      </button>
      {showDropdown && (
        <div className="filter-dropdown">
          <div className="filter-section">
            <p>Price low to high</p>
          </div>
          <div className="filter-section">
            <p>Price high to low</p>
          </div>
          <div className="filter-section">
            <p>Rating high to low</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
