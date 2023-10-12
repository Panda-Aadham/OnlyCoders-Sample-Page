import React from "react";
import Icon from "../Icon/Icon.tsx";
import UserDetails from "../UserDetails/UserDetails.tsx";
import "./User.css"

export interface User {
    name: string;
    username: string;
    profilePicture: string;
    verified: boolean;
    proUser: boolean;
    level: number;
    uuid: string;
    registrationDate: Date;
}

const Profile = (props: {user: User}) => {
    const {user} = props;

    return(
    <div className="profile-container">
        <div className="profile-icon">
            <Icon picture={user.profilePicture} level={user.level}/>
        </div>
        <div className="profile-text">
          <UserDetails user={user}/>
          <div className="profile-username">@{user.username}</div>
        </div>
    </div>
    )
};

export default Profile;