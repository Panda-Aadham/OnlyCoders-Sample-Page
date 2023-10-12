import React from "react";
import { Card } from "react-bootstrap";
import Profile from "../../../../components/User/User.tsx";
import "./NewUsers.css"

// Custom component for "Newest Members" section of feed
const NewUsers = () => {
    const user = {
        name: "Adam Ahmad",
        username: "FredJamalIII",
        profilePicture: process.env.PUBLIC_URL + '/images/profile.png',
        verified: true,
        proUser: false,
        level: 6,
        uuid: "12388b30-3547-4ba7-bbc6-ca321f52cb51"
    }

    return (
    <Card className="nu-card">
        <Card.Body className="nu-card-title">
            <Card.Title className="nu-title">Newest Members</Card.Title>
        </Card.Body>
        <Profile user={user}/>
        <Profile user={user}/>
        <Profile user={user}/>
        <Profile user={user}/>
        <Profile user={user}/>
    </Card>
    )
}

export default NewUsers;