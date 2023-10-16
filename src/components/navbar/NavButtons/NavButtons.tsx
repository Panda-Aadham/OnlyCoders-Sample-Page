import React, { useState } from "react";
import { Button } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropdownMenu from "./Dropdown/DropdownMenu.tsx";
import "./NavButtons.css"

// Titles and paths for the "Feature" & "More" dropdown items 
import { featureItems, moreItems } from "./Dropdown/dropdownItems.tsx";

// Displays Navbar buttons - Home, Features, and More
const NavButtons = () => {
  // States for showing the dropdowns respectively
  const [hoverOnFeature, setHoverOnFeature] = useState(false);
  const [hoverOnMore, setHoverOnMore] = useState(false);

  const handleMouseEnter = (setOpen: (arg0: boolean) => void) => {
    setOpen(true);
  };

  const handleMouseLeave = (setOpen: (arg0: boolean) => void) => {
    setOpen(false);
  };

  return(
  <div className="nav-buttons">
    <Button type="submit" className="nav-button">Home</Button>
    <Button
      type="submit"
      className="nav-button nav-dropdown"
      onMouseEnter={() => {handleMouseEnter(setHoverOnFeature)}}
      onMouseLeave={() => {handleMouseLeave(setHoverOnFeature)}}
    >
      {featureItems.label}
      <KeyboardArrowDownIcon className='dropdown-caret'/>
      <DropdownMenu isOpen={hoverOnFeature} elements={featureItems.elements}/>
    </Button>
    <Button
      type="submit"
      className="nav-button nav-dropdown"
      onMouseEnter={() => {handleMouseEnter(setHoverOnMore)}}
      onMouseLeave={() => {handleMouseLeave(setHoverOnMore)}}
    >
      {moreItems.label}
      <KeyboardArrowDownIcon className='dropdown-caret'/>
      <DropdownMenu isOpen={hoverOnMore} elements={moreItems.elements} />
    </Button>
  </div>
  )
}

export default NavButtons;