import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="breadcrumb">
        <h1>Dashboards / Default</h1>
      </div>
      <div className="header-actions">
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input" 
          aria-label="Search"
        />
        <div className="icons">
          <span className="icon">🔔</span>
          <span className="icon">⚙️</span>
          <span className="icon">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
