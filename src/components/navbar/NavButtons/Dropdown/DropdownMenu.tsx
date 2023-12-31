import React from 'react';
import './DropdownMenu.css';

// Component for navbar button dropdown
const DropdownMenu = (props: {isOpen: boolean, elements: {path: string, title: string}[]}) => {
  const {isOpen, elements} = props;

  return (
    <ul className='dropdown-menu' >
      {isOpen && elements.map((item: { path: string; title: string; }, index: number) => {
        return (
          <li key={index}>
            <button
              className="dropdown-item"
              // to={item.path}
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