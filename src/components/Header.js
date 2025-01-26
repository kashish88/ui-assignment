import React from "react";
import "./Header.css";


const Header = () => {
  return (
    <div className="header">
      <div className="breadcrumb">
        <div className="logo-icons">
          <span className="logo-icon"><img src="/Sidebar.png" alt="Logo" /></span>
          <span className="logo-icon"><img src="/Star.png" alt="Logo" /></span>
        </div>
        <span className="dashboards">Dashboards/</span>
        <span className="default">Default</span>
      </div>
      <div className="header-actions">
        <div className="search-container">
          <div className="search-wrapper">
            <img src="/IconSet.png" alt="Search" />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
            />
          </div>
          <img src="/Text.png" alt="Search" />
        </div>
        <div className="icons">
          <span className="icon"> <img src="/Sun.png" alt="Logo" /></span>
          <span className="icon"><img src="/ClockCounterClockwise.png" alt="Logo" /></span>
          <span className="icon"><img src="/Bell.png" alt="Logo" /></span>
          <span className="icon"><img src="/Sidebar.png" alt="Logo" /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
