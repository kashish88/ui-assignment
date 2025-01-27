import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Sidebar = () => {
    const {isDarkMode} = useTheme();
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/ByeWind.png" alt="Logo" className="sidebar-logo" />
        <p>ByeWind</p>
      </div>
      <div className="sidebar-section">
        <div className="favorites-recently">
          <p>Favorites</p>
          <p className="recently">Recently</p>
        </div>
        <ul className="favorites">
          <li>Overview</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <p>Dashboards</p>
        <ul className="dashboards">
          <li className="active" style={{backgroundColor:isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(28, 28, 28, 0.05)"}}>
            <img
              src={isDarkMode?"/ChartPieSlice (1).png":"/ChartPieSlice.png"}
              alt="Default Icon"
              className="list-icon"
            />
            Default
          </li>
          <Link to="/" className="list-link">
          <li>
            <img
              src={isDarkMode?"/ShoppingBagOpen (1).png":"/ShoppingBagOpen.png"}
              alt="eCommerce Icon"
              className="list-icon"
            />
            eCommerce
          </li>
          </Link>
          <li>
            <img
              src={isDarkMode?"/FolderNotch (1).png":"/FolderNotch.png"}
              alt="Projects Icon"
              className="list-icon"
            />
            Projects
          </li>
          <li>
            <img
              src={isDarkMode?"/BookOpen (1).png":"/BookOpen.png"}
              alt="Online Courses Icon"
              className="list-icon"
            />
            Online Courses
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <p>Pages</p>
        <ul className="users">
          <li>
            <span className="user">
              <span className="arrow down-arrow">&gt;</span>
              <img
                src={isDarkMode?"/IdentificationBadge (1).png":"/IdentificationBadge.png"}
                alt="User Profile Icon"
                className="list-icon"
              />
              User Profile
            </span>
            <ul className="nested-list">
              <li>Overview</li>
              <li>Projects</li>
              <li>Campaigns</li>
              <li>Documents</li>
              <li>Followers</li>
            </ul>
          </li>
          <li>
            <span className="user">
              <span className="arrow"> &gt; </span>
              <img
                src={isDarkMode?"/IdentificationCard (1).png":"/IdentificationCard.png"}
                alt="Account Icon"
                className="list-icon"
              />
              Account
            </span>
          </li>
          <li>
            <span className="user">
              <span className="arrow"> &gt; </span>
              <img
                src={isDarkMode?"/UsersThree (1).png":"/UsersThree.png"}
                alt="Corporate Icon"
                className="list-icon"
              />
              Corporate
            </span>
          </li>
          <li>
            <span className="user">
              <span className="arrow"> &gt; </span>
              <img
                src={isDarkMode?"/Notebook (1).png":"/Notebook.png"}
                alt="Blog Icon"
                className="list-icon"
              />
              Blog
            </span>
          </li>
          <li>
            <span className="user">
              <span className="arrow"> &gt; </span>
              <img
                src={isDarkMode?"/ChatsTeardrop (1).png":"/ChatsTeardrop.png"}
                alt="Social Icon"
                className="list-icon"
              />
              Social
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
