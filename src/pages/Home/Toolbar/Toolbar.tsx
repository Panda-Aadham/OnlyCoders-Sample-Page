import React, { useState } from "react";
import { toolbarIcons } from "./ToolbarIcons.tsx";
import { Link } from 'react-router-dom';
import "./Toolbar.css";

const Toolbar = (props: {selectedIcon: number}) => {
    const [selectedIcon, setSelectedIcon] = useState(props.selectedIcon);

    const handleClick = (index: number) => {
        setSelectedIcon(index)
    }
    
    return (
    <div className="tool-bar">
        {toolbarIcons.map((Icon: { element: React.JSX.Element, path: string }, index: number) => (
        <Link to={Icon.path}
            className={selectedIcon === index ? "tool-btn selected" : "tool-btn"}
            onClick={() => {handleClick(index)}}
            key={index}>
            {Icon.element}
        </Link>
        ))}
    </div>
    );
}

export default Toolbar;