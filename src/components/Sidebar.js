import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
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
          <li className="active">
            <img
              src="/ChartPieSlice.png"
              alt="Default Icon"
              className="list-icon"
            />
            Default
          </li>
          <li>
            <img
              src="/ShoppingBagOpen.png"
              alt="eCommerce Icon"
              className="list-icon"
            />
            eCommerce
          </li>
          <li>
            <img
              src="/FolderNotch.png"
              alt="Projects Icon"
              className="list-icon"
            />
            Projects
          </li>
          <li>
            <img
              src="/BookOpen.png"
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
                src="/IdentificationBadge.png"
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
                src="/IdentificationCard.png"
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
                src="/UsersThree.png"
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
                src="/Notebook.png"
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
                src="/ChatsTeardrop.png"
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
