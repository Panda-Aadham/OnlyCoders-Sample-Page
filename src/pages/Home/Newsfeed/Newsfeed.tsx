import React from "react";
import "./Newsfeed.css"
import { Col, Container, Row } from "react-bootstrap";

const Newsfeed = () => {
    return(
        // <div className="feed">
        //     <Container className="feed-grid">
        //         <Row>
        //             <img className="feed-image" src={process.env.PUBLIC_URL + '/images/newsfeed.png'} alt="newsfeed picture" />
        //         </Row>
        //         <div className="row">
        //             <div className="col-md-3">
        //             <div className="box red">Red Box</div>
        //             </div>
        //             <div className="col-md-6">
        //             <div className="box green">Green Box</div>
        //             </div>
        //             <div className="col-md-3">
        //             <div className="box blue">Blue Box</div>
        //             </div>
        //         </div>
        //     </Container>
        // </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                <div className="box red">Red Box</div>
                </div>
                <div className="col-md-6">
                <div className="box green">Green Box</div>
                </div>
                <div className="col-md-3">
                <div className="box blue">Blue Box</div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed