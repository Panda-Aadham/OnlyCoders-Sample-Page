import React, { useState } from "react";
import Searchbar from "./Searchbar/Searchbar.tsx";
import { Button, Col, Container, Row } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavButtons from "./NavButtons/NavButtons.tsx";
import "./Navbar.css";
import LoginModal from "../LoginModal/LoginModal.tsx";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  
  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  const handleLoginClick = () => {
    setShowLogin(true);
  }
  
  return (
    <div className="nav">
      <div className="nav-top">
        <img className="nav-logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="company logo" />
        <button onClick={handleClick} className="nav-menu">
          {openMobileMenu ? <CloseIcon className="nav-menu-btn"/> : <MenuIcon className="nav-menu-btn"/>}
        </button>
      </div>
      <div className={`nav-container ${openMobileMenu ? "active" : "container"}`}>
        <div className={openMobileMenu ? "nav-rows" : "nav-rows row"} style={{ height: "100%"}} >
          <div className={openMobileMenu ? "nav-items" : "nav-items col-md-3 col-sm-2"}>
            <NavButtons />
          </div>
          <div className={openMobileMenu ? "nav-search" : "nav-search col-md-7 col-sm-9"}>
            <Searchbar />
          </div>
          <div className={openMobileMenu ? "nav-login" : "nav-login col-md-2 col-sm-1"}>
            <Button onClick={handleLoginClick} className="nav-login-btn">Login</Button>
          </div>
        </div>
      </div>
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)}/>
    </div>
  )
}

export default Navbar