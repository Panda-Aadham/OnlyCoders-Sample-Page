import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { User } from "../User/User.tsx";
import { Badge } from "react-bootstrap";
import "./UserDetails.css"

// Component to display user name and badges (verified + pro member)
const UserDetails = (props: {user: User}) => {
    const {user} = props

    return(
        <div className="user-details">
            {user.name}  
            {user.verified && <CheckCircleIcon fontSize="small" className="user-verified"/>}
            {user.proUser && <Badge className="user-pro badge bg-purple">Pro Member</Badge>}
        </div>
    )
}

export default UserDetails;