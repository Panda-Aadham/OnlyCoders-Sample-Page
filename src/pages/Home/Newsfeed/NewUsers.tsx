import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./NewUsers.css"

const NewUsers = () => {
    return (
    <Card className="nu-card">
      <Card.Body>
        <Card.Title style={{fontSize: "2vh"}}>Newest Members</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    )
}

export default NewUsers;