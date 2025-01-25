import React from "react";
import Header from "./Header";
import Notifications from "./Notifications";
import MainContent from "./MainContent";


const Home = () => {
  return (
    <div className="home" >
     <MainContent />
     <Notifications />
    </div>
  );
};

export default Home;
