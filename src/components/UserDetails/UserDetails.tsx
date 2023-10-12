import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { User } from "../User/User.tsx";
import "./UserDetails.css"

const VerifiedBadge = (props: {user: User}) => {
    const {user} = props

    return(
        <div className="user-details">
            {user.name}  
            {user.verified && <CheckCircleIcon fontSize="small" className="user-verified"/>}
            {user.proUser && <div className="user-pro">Pro Member</div>}
        </div>
    )
}

export default VerifiedBadge;