import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <button
              className="dropdown-item"
              // to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownMenu;