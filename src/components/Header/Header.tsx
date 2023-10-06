import React, { useState } from "react";
import DropdownMenu from './Dropdown/DropdownMenu.tsx';
import Searchbar from "./Searchbar/Searchbar.tsx";
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import GridViewIcon from '@mui/icons-material/GridView';
import { CSSTransition } from 'react-transition-group';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { featureItems, moreItems } from "./Dropdown/dropdownItems.tsx";
import "./Header.css";

const Header = () => {
  const [hoverOnFeature, setHoverOnFeature] = useState(false);
  const [hoverOnMore, setHoverOnMore] = useState(false);

  const onMouseEnter = (setOpen: (arg0: boolean) => void) => {
    setOpen(true);
  };

  const onMouseLeave = (setOpen: (arg0: boolean) => void) => {
    setOpen(false);
  };
  
  return (
    <Navbar fixed="top">
      <Row className="nav">
        <Col className="nav-menu">
          <img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="company logo" />
          <GridViewIcon className="grid-icon" />
          <Button variant="primary" type="submit" className="nav-button">Home</Button>
          <Button
            variant="primary"
            type="submit"
            className="nav-button"
            onMouseEnter={() => {onMouseEnter(setHoverOnFeature)}}
            onMouseLeave={() => {onMouseLeave(setHoverOnFeature)}}
            >
            Features
            <KeyboardArrowDownIcon className='dropdown-caret'/>
            <DropdownMenu isOpen={hoverOnFeature} items={featureItems}/>
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="nav-button"
            onMouseEnter={() => {onMouseEnter(setHoverOnMore)}}
            onMouseLeave={() => {onMouseLeave(setHoverOnMore)}}
            >
            More
            <KeyboardArrowDownIcon className='dropdown-caret'/>
            <DropdownMenu isOpen={hoverOnMore} items={moreItems} />
          </Button>
        </Col>
        <Col className="nav-secondary">
          <Searchbar />
          <Button variant="primary" type="submit" className="nav-login">Login</Button>
        </Col>
      </Row>
    </Navbar>
  )
}

export default Header