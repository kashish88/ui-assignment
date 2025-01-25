import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Notifications from "./components/Notifications";
import Home from "./components/HomePage";
import Orders from "./components/OrdersPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Sidebar />
      <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
