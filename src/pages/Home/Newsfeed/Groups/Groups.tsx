import React from "react";
import { Card } from "react-bootstrap";
import Group from "../../../../components/Group/Group";
import "./Groups.css";

const group = {
    name: "Street Artists",
    picture: process.env.PUBLIC_URL + '/images/groupPicture1.png',
    members: 13,
    public: true,
    uuid: "aksdasd"
}

// Custom component for "Popular Groups" section of feed
const Groups = () => {
    return(
    <Card className="groups-card">
        <Card.Body className="groups-card-title">
            <Card.Title className="groups-title">Popular Groups</Card.Title>
        </Card.Body>
        <Group group={group}/>
        <Group group={group}/>
        <Group group={group}/>
        <Group group={group}/>
        <Group group={group}/>
    </Card>
    )
}

export default Groups;