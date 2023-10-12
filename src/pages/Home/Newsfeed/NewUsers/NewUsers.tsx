import React from "react";
import { Card } from "react-bootstrap";
import Profile, { User } from "../../../../components/User/User.tsx";
import { sampleUsers } from "../../../../sampleData/userData.tsx"
import "./NewUsers.css"

// Custom component for "Newest Members" section of feed
const NewUsers = () => {
    const getNewestUsers = (users: User[]) => {
        const sortedUsers = users.sort((a, b) => b.registrationDate.getTime() - a.registrationDate.getTime());
        return sortedUsers.slice(0, 5);
    }

    const newestUsers = getNewestUsers(sampleUsers);

    return (
    <Card className="nu-card">
        <Card.Body className="nu-card-title">
            <Card.Title className="nu-title">Newest Members</Card.Title>
        </Card.Body>
        {newestUsers.map((user) => <Profile user={user}/>)}
    </Card>
    )
}

export default NewUsers;