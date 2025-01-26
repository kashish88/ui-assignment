import React from "react";
import "./Notification.css";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="section">
        <p className="notification-heading">Notifications</p>
        <ul>
          <li>
            <img src="BugBeetle.png" alt="Bug" className="icon" />
            <div className="notification-content">
            <span>You have a bug that needs...</span>
            <span className="timestamp">Just now</span>
            </div>
          </li>
          <li>
            <img src="User.png" alt="New User" className="icon" />
            <div className="notification-content">
            <span>New user registered</span>
            <span className="timestamp">59 minutes ago</span>
            </div>
          </li>
          <li>
            <img src="BugBeetle.png" alt="Bug" className="icon" />
            <div className="notification-content">
            <span>You have a bug that needs...</span>
            <span className="timestamp">12 hours ago</span>
            </div>
          </li>
          <li>
            <img src="Broadcast.png" alt="Subscription" className="icon" />
            <div className="notification-content">
            <span>Andi Lane subscribed to you</span>
            <span className="timestamp">Today, 11:59 AM</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="section">
      <p className="notification-heading">Activities</p>
        <ul>
          <li>
            <img src="Male.png" alt="Bug" className="icon" />
            <div className="notification-content">
            <span>You have a bug that needs...</span>
            <span className="timestamp">Just now</span>
            </div>
          </li>
          <li>
            <img src="Female05.png" alt="Release" className="icon" />
            <div className="notification-content">
            Released a new version
            <span className="timestamp">59 minutes ago</span>
            </div>
          </li>
          <li>
            <img src="Female.png" alt="Bug Submission" className="icon" />
            <div className="notification-content">
            Submitted a bug
            <span className="timestamp">12 hours ago</span>
            </div>
          </li>
          <li>
            <img src="Male07.png" alt="Bug Submission" className="icon" />
            <div className="notification-content">
            Modified A data in Page X
            <span className="timestamp">Today, 11:59 AM</span>
            </div>
          </li>
          <li>
            <img src="Male11.png" alt="Bug Submission" className="icon" />
            <div className="notification-content">
            Deleted a page in Project X
            <span className="timestamp">Feb 2, 2023</span>
            </div>
          </li>

        </ul>
      </div>
      <div className="section">
      <p className="notification-heading">Contacts</p>
        <ul>
          <li>
            <img src="Female15.png" alt="Contact" className="icon" />
            Natali Craig
          </li>
          <li>
            <img src="Male08.png" alt="Contact" className="icon" />
            Drew Cano
          </li>
          <li>
            <img src="Male06.png" alt="Contact" className="icon" />
            Orlando Diggs
          </li>
          <li>
            <img src="Female08.png" alt="Contact" className="icon" />
            Andi Lane
          </li>
          <li>
            <img src="Female09.png" alt="Contact" className="icon" />
            Kate Morrison
          </li>
          <li>
            <img src="Male12.png" alt="Contact" className="icon" />
            Koray Okumus
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
