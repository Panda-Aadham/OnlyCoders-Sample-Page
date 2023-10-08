import React, { useState } from "react";
import {AllInboxOutlined as AllInboxOutlinedIcon,
    PersonOutlineOutlined as PersonOutlineOutlinedIcon,
    GroupsOutlined as GroupsOutlinedIcon,
    MilitaryTechOutlined as MilitaryTechOutlinedIcon,
    GradeOutlined as GradeOutlinedIcon,
    DiamondOutlined as DiamondOutlinedIcon,
    EventNoteOutlined as EventNoteOutlinedIcon,
    TextsmsOutlined as TextsmsOutlinedIcon,
    ShoppingBasketOutlined as ShoppingBasketOutlinedIcon,
    StyleOutlined as StyleOutlinedIcon,
} from '@mui/icons-material';
import { Button } from "react-bootstrap";
import "./Toolbar.css";

const icons = [
    AllInboxOutlinedIcon,
    PersonOutlineOutlinedIcon,
    GroupsOutlinedIcon,
    MilitaryTechOutlinedIcon,
    GradeOutlinedIcon,
    DiamondOutlinedIcon,
    EventNoteOutlinedIcon,
    TextsmsOutlinedIcon,
    ShoppingBasketOutlinedIcon,
    StyleOutlinedIcon,
];

const Toolbar = () => {
    const [selectedIcon, setSelectedIcon] = useState(0);

    const handleClick = (index: number) => {
        setSelectedIcon(index)
    }
    
    return (
    <div className="content">
        <div className="tool-bar">
            {icons.map((Icon, index) => (
            <Button 
                className={selectedIcon === index ? "tool-btn selected" : "tool-btn"}
                onClick={() => {handleClick(index)}}
                key={index}>
                <Icon/>
            </Button>
            ))}
        </div>
    </div>
    );
}

export default Toolbar;