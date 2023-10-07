import React, { useState } from "react";
import DropdownMenu from './Dropdown/DropdownMenu.tsx';
import Searchbar from "./Searchbar/Searchbar.tsx";
import { Navbar, Button } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { featureItems, moreItems } from "./Dropdown/dropdownItems.tsx";
import "./Header.css";

const Header = () => {
  const [hoverOnFeature, setHoverOnFeature] = useState(false);
  const [hoverOnMore, setHoverOnMore] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleMouseEnter = (setOpen: (arg0: boolean) => void) => {
    setOpen(true);
  };

  const handleMouseLeave = (setOpen: (arg0: boolean) => void) => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu)
  }
  
  return (
    <Navbar fixed="top">
      <ul className={openMobileMenu ? "nav active" : "nav"} >
        <li className="nav-branding">
          <img className="nav-logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="company logo" />
          <GridViewIcon className="grid-icon" />
        </li>
        <div className="nav-menu" onClick={handleClick}>
          {openMobileMenu ? <CloseIcon className="nav-menu-btn"/> 
          : <MenuIcon className= 'nav-menu-btn'/>}
        </div>
        <div className={openMobileMenu ? 'nav-container active' : 'nav-container'}>
          <li className='nav-buttons'>
          <Button variant="primary" type="submit" className="nav-button">Home</Button>
          <Button
            variant="primary"
            type="submit"
            className="nav-button"
            onMouseEnter={() => {handleMouseEnter(setHoverOnFeature)}}
            onMouseLeave={() => {handleMouseLeave(setHoverOnFeature)}}
            >
            {featureItems.label}
            <KeyboardArrowDownIcon className='dropdown-caret'/>
            <DropdownMenu isOpen={hoverOnFeature} elements={featureItems.elements}/>
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="nav-button"
            onMouseEnter={() => {handleMouseEnter(setHoverOnMore)}}
            onMouseLeave={() => {handleMouseLeave(setHoverOnMore)}}
            >
            {moreItems.label}
            <KeyboardArrowDownIcon className='dropdown-caret'/>
            <DropdownMenu isOpen={hoverOnMore} elements={moreItems.elements} />
          </Button>
          {openMobileMenu && <li className='nav-login'>
            <Button variant="primary" type="submit" className="nav-login-btn">Login</Button>
          </li>}
          </li>
          <li className='nav-search'>
            <Searchbar />
          </li>
           {!openMobileMenu && <li className='nav-login'>
            <Button variant="primary" type="submit" className="nav-login-btn">Login</Button>
          </li>}
        </div>
      </ul>
    </Navbar>
  )
}

export default Header