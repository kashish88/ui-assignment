import React from "react";
import "./Notification.css";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="section">
        <h3>Notifications</h3>
        <ul>
          <li>You have a bug that needs fixing</li>
          <li>New user registered</li>
          <li>Andi Lane subscribed to you</li>
        </ul>
      </div>
      <div className="section">
        <h3>Activities</h3>
        <ul>
          <li>Released a new version</li>
          <li>Submitted a bug</li>
        </ul>
      </div>
      <div className="section">
        <h3>Contacts</h3>
        <ul>
          <li>Natali Craig</li>
          <li>Drew Cano</li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
