import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewUsers from "./NewUsers/NewUsers";
import Groups from "./Groups/Groups";
import Posts from "./Posts/Posts";
import "./Newsfeed.css"

const Newsfeed = () => {
    return(
        <div className="feed">
            <Container className="feed-grid">
                <Row>
                    <img className="feed-image" src={process.env.PUBLIC_URL + '/images/newsfeed.png'} alt="newsfeed picture" />
                </Row>
                <Row>
                    <Col className="col-md-3">
                        <NewUsers/>
                        {/* <div className="box red">Red Box</div> */}
                    </Col>
                    <Col className="col-md-6">
                        <Posts/>
                        {/* <div className="box green">Green Box</div> */}
                    </Col>
                    <Col className="col-md-3">
                        <Groups/>
                        {/* <div className="box blue">Blue Box</div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Newsfeed