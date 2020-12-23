// importing react-------->
import React from 'react';

// importing style files----------->
import './Styles/pagesinmodal.css';

// importing Bootstrap components---------------->
import { Row, Col, Form } from 'react-bootstrap';

// importing react router modules---------------------------------------------->
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// importing components------->
import Qrcode from './Qrcode';


// rendering page------>
function theWindow() {
    return (
        <Router>
            <div>
                <div className="button-grouping">
                    <Row>
                        <Link className="cool-link" to="/">How to scan</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="cool-link" to="/about">Scan</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="cool-link" to="/dashboard">About Yoti</Link>
                    </Row>
                </div>
                <div className="section-middle">
                    <div>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router >
    );
}

function Home() {
    return (
        <div>
            <h2>How to scan</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>Scan</h2>
            <Row>
                <Col>
                    <Form className="theform">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Given Name(s)" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Family Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Date of Birth" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Address" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Photo Authentication" />
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                    <Qrcode />
                </Col>
            </Row>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>About Yoti</h2>
        </div>
    );
}

export default theWindow;