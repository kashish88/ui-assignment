import React from "react";
import "./Header.css";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <div className="header">
      <div className="breadcrumb">
        <div className="logo-icons">
          <span className="logo-icon"><img src={isDarkMode ? "/Sidebar (1).png" : "/Sidebar.png"} alt="Logo" /></span>
          <span className="logo-icon"><img src={isDarkMode ? "/Star (1).png" : "/Star.png"} alt="Logo" /></span>
        </div>
        <span style={{ color: isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)" }}>Dashboards/</span>
        <span style={{ color: isDarkMode ? "#fff" : "rgba(28, 28, 28, 1)" }}>Default</span>
      </div>
      <div className="header-actions">
        <div className="search-container" style={{ backgroundColor: isDarkMode ? "rgba(28, 28, 28, 0.4)" : "rgba(247, 249, 251, 1)" }} >
          <div className="search-wrapper" >
            <img src={isDarkMode ? "/Search (1).png" : "/IconSet.png"} alt="Search" />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
              style={{ backgroundColor: isDarkMode ? "rgba(28, 28, 28, 0.4)" : "rgba(247, 249, 251, 1)" }}
            />
          </div>
          <img src={isDarkMode ? "/Text (1).png" :"/Text.png"} alt="Search" />
        </div>
        <div className="icons">
          <span className="icon" onClick={toggleTheme}> <img src={isDarkMode ? "/Sun (1).png" : "/Sun.png"} alt="Logo" /></span>
          <span className="icon"><img src={isDarkMode ? "/ClockCounterClockwise (1).png" : "/ClockCounterClockwise.png"} alt="Logo" /></span>
          <span className="icon"><img src={isDarkMode ? "/Bell (1).png" : "/Bell.png"} alt="Logo" /></span>
          <span className="icon"><img src={isDarkMode ? "/Sidebar (1).png" : "/Sidebar.png"} alt="Logo" /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
