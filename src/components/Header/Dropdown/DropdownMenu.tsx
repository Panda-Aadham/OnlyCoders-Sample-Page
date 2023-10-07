import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './DropdownMenu.css';

const DropdownMenu = (props: {isOpen: boolean, elements: {path: string, title: string}[]}) => {
  const {isOpen, elements} = props;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <ul onClick={handleClick} className='dropdown-menu' >
      {isOpen && elements.map((item: { path: string; title: string; }, index: number) => {
        return (
          <li key={index}>
            <Button
              className="dropdown-item"
              // to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownMenu;