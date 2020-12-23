//importing react------------>
import React from 'react';

// importing bootstrap components------------->
import { Card, Row, Col } from 'react-bootstrap';

// importing style files------->
import './Styles/Appcard.css';

// importing image files----->
import apple from './Images/applestore2.png';
import gplay from './Images/google-play.png';


// rendering page------------>
function rock() {
    return (
        <div className="the-card">
            <Card style={{ width: '30rem' }} className="the-card-container">
                <Card.Body>
                    <Card.Title><h2 className="font-title-in-card2">Part of this demo requires the Yoti App</h2></Card.Title>
                    <Card.Text><p className="micros-in-card2">You will need to register the Yoti app on your smartphone to be able to use Yoti services in this demo.</p></Card.Text>
                    <Row>
                        <Col><img className="piks" src={apple} alt=" " /><img className="piks" src={gplay} alt=" " /></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default rock;