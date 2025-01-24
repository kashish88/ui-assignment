import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <MainContent />
        <Notifications />
      </div>
    </div>
  );
}

export default App;
