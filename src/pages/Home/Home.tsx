import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../components/Navbar/Navbar.tsx";
import Toolbar from "./Toolbar/Toolbar.tsx";
import Newsfeed from "./Newsfeed/Newsfeed.tsx"
import "./Home.css"

const Home = () => {
    return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <Toolbar selectedIcon={0}/>
        <Newsfeed />
      </div>
    </div>
    )
}

export default Home