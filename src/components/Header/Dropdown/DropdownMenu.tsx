import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './DropdownMenu.css';

const DropdownMenu = (props: {isOpen: boolean, items: {id: string, label: string, elements: {path: string, title: string}[]}}) => {
  const {id, label, elements} = props.items;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <ul onClick={handleClick} className='dropdown-menu' >
      {props.isOpen && elements.map((item: { path: string; title: string; }, index: number) => {
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