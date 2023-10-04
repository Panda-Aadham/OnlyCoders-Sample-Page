import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './DropdownMenu.css';

const DropdownMenu = (props: {items: {id: string, label: string, elements: {path: string, title: string}[]}}) => {
  const {id, label, elements} = props.items;
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false)

  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    setOpen(true)
  };

  const onMouseLeave = () => {
    setOpen(false)
  }

  return (
    <div className='dropdown'>
      <Button 
      variant="primary"
      type="submit"
      className="nav-button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
        {label}
        <KeyboardArrowDownIcon className={`dropdown-caret`} />
      </Button>
      <ul
        onClick={handleClick}
        className={click ? `dropdown-menu clicked ${id}` : `dropdown-menu ${id}`}
      >
        {open && elements.map((item: { path: string; title: string; }, index: number) => {
          return (
            <li key={index}>
              <Button
                className="dropdown-item"
                // to={item.path}
                onClick={() => setClick(false)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {item.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownMenu;