import React from "react";
import { Card } from "react-bootstrap";
import GroupDisplay , { Group } from "../../../../components/Group/Group.tsx";
import { sampleGroups } from "../../../../sampleData/groupData.tsx"
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
    const getPopularGroups = (groups: Group[]) => {
        const sortedGroups = groups.sort((a, b) => b.members - a.members);
        return sortedGroups.slice(0, 5);
    }

    const popularGroups = getPopularGroups(sampleGroups);

    return(
    <Card className="groups-card">
        <Card.Body className="groups-card-title">
            <Card.Title className="groups-title">Popular Groups</Card.Title>
        </Card.Body>
        {popularGroups.map((group) => <GroupDisplay group={group}/>)}
    </Card>
    )
}

export default Groups;