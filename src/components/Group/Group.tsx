import React from "react";
import Icon from "../Icon/Icon";
import PublicIcon from '@mui/icons-material/Public';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./Group.css"

export interface Group {
    name: string;
    picture: string;
    members: number;
    public: boolean;
    uuid: string;
}

const GroupDisplay = (props: {group: Group}) => {
    const {group} = props;

    return(
    <div className="group-container">
        <div className="group-icon">
            <Icon picture={group.picture}/>
        </div>
        <div className="group-text">
            <div className="group-name">{group.name}</div>
            <div className="group-members">{group.members} members</div>
        </div>
        <div className="group-privacy">
            {group.public ? <PublicIcon/> : <LockOutlinedIcon/>}
        </div>
    </div>
    )
}

export default GroupDisplay;