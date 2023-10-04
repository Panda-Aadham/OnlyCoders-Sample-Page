import React, { useState } from "react";
import DropdownMenu from './Dropdown/DropdownMenu.tsx';
import Searchbar from "./Searchbar/Searchbar.tsx";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { featureItems, moreItems } from "./Dropdown/dropdownItems.tsx";
import "./Header.css";

const Header = () => {
  
  return (
    <Navbar fixed="top">
      <Row className="nav">
        <Col md={"auto"} className="nav-menu">
          <Navbar.Brand className="logo">
            <img className="image" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="company logo" />
            <img className="title" src={process.env.PUBLIC_URL + '/images/text.png'} alt="company name" />
          </Navbar.Brand>
          <Button variant="primary" type="submit" className="nav-button">Home</Button>
          <DropdownMenu items={featureItems}/>
          <DropdownMenu items={moreItems} />
        </Col>
        <Col md={"auto"} className='nav-secondary'>
          <Searchbar />
          <Button variant="primary" type="submit" className="nav-login">Login</Button>
        </Col>
      </Row>
    </Navbar>
  )
}

export default Header