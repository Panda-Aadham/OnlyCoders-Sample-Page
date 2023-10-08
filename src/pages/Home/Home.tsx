import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.tsx";
import Toolbar from "./Toolbar/Toolbar.tsx";
import "./Home.css"

const Home = () => {
    
    return (
    <div className="container">
        <Navbar />
        <Toolbar />
      </div>
    )
}

export default Home