import React from "react";
import "./Icon.css";

// Component for user/group icons
const Icon = (props: {picture: string, level?: number}) => {
    const {picture, level} = props;

    return(
        <div className="icon-container">
            <div className="icon-image">
                <img src={picture} alt="profile-pic"/>
            </div>
            {level && <div className="icon-level">
                <span className="level">{level}</span>
            </div>}
      </div>
    )
}

export default Icon