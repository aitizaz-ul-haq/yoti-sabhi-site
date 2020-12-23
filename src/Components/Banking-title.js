// importing react--------->
import React from 'react';

// importing style files------------->
import './Styles/Banking-title.css';

// importing images------------------->
import badgeuser from './Images/user.png';
import badgesearch from './Images/search.png';
import profilepic from './Images/profilepic4.png';
import Downwardarrow from './Images/arrowdown.png';

// importing react router modules------->
import { Link } from 'react-router-dom';

// importing components---------->
import AppCard from './App-card';

// importing bootstrap components----------------------------->
import { Badge, Card, Button, Col, Row } from 'react-bootstrap';



//Rendering page-------------------------------------------->
function Banking() {
    return (
        <div>
            <Row>
                <Col className="the-cols">
                    <div className="Banking-section">
                        <h1 className="font-title"><b>Banking</b></h1>
                        <h5 className="font-rang">Product in use:</h5><br></br>
                        <h5 className="font-rang"><Badge className="badge-img-one" variant="success"><img src={badgesearch} alt="notext" /></Badge> &nbsp;Authentication</h5>
                        <h5 className="font-rang"><Badge className="badge-img-two" variant="success"><img src={badgeuser} alt="notext" /></Badge> &nbsp;Identity Verification</h5>
                    </div>
                    <div>
                        <AppCard />
                    </div>
                    <div className="containswriting">
                        <h1 className="big-heading">Imagine if you could complete a successful KYC check every time. Imagine if you could do it without forms, photocopies of ID documents or even needing staff checks. Well, with Yoti you can.</h1>
                        <h3 className="containspara">Yoti makes identity verification simple. We help financial services perform instant identity checks of customers with pre-verified details from over 160 countries. When a new customer comes to you, we have already verified that they are who they say they are, so you don't have to.</h3>
                        <br />
                        <h3 className="containspara">We can guarantee a successful KYC and AML check every time because every Yoti account combines a person's unique biometric information (like their facial features) with information taken from their government issued ID document (like a passport or driving licence).</h3>
                        <br />
                        <h3 className="containspara">Our team of highly skilled super recognisers then verify that both pieces of information match. A super recogniser is a person with an innate ability to recognise faces (typically scoring in the top 1-2% of facial recognition tests). It's an anti-spoofing measure that helps us, and financial services, to be certain that every Yoti account is created and controlled by the genuine owner.</h3>
                        <br />
                        <h1 className="big-heading">Secure and user friendly authentication.</h1>
                        <h3 className="containspara">Yoti authentication doesn't just save businesses time and money, it's also a great deal easier for customers. Registering with and logging in to online accounts using the Yoti app is simple.</h3>
                        <br />
                        <h3 className="containspara">Help your customers register for your services in less than 20 seconds on mobile and less than 25 seconds on desktop.</h3>
                        <br />
                        <br />
                    </div>
                </Col>
                <Col>
                    <div className="cardbody">
                        <Card style={{ width: '17rem' }}>
                            <Card.Body>
                                <Card.Title><h2 className="fontofcard">Try it now</h2></Card.Title>
                                <Card.Text><h5 className="underwording">Free and anonymous demo</h5></Card.Text>
                                <Card.Text className="setup">
                                    Setup a verified account in our virtual banking website and learn how Yoti works.
                    </Card.Text>
                                <Button variant="info" className="boot"> <Link to="/Nextpage" className="launch">Launch Demo</Link></Button>
                                <Card.Text className="verysmall">
                                    <br></br>
                            All our demos permanently delete any details shared, including activity logs. We keep no record of your personal details.
                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="cardbody">
                        <Card style={{ width: '17rem' }}>
                            <br />
                            <Card.Body><img className="profile" src={profilepic} alt="notext" />
                                <Card.Title><h2 className="fontofcard">Find out more</h2></Card.Title>
                                <Card.Text className="verysmallsecond">
                                    For more information on how Yoti might be used for your business, please contact <b>Gareth Narinesingh</b> at <br /> <a href="www.google.com"><b>business@yoti.com</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row style={{ alignItems: 'center' }}>
                <h4 className="containspara2" ><b>Discover ways people can use Yoti.</b></h4>
                <br></br>
            </Row>
            <h4 className="containspara3" ><img src={Downwardarrow} alt="notext" /></h4>
            <Row>
                <h1>Product Demos</h1>
            </Row>
            <Row>
                <Col>
                    <div className="cardbodyrow">
                        <Card style={{ width: '11rem' }}>
                            <br />
                            <Card.Body>
                                <Card.Title><h2 className="fontofcard">Find out more</h2></Card.Title>
                                <Card.Text className="verysmallsecond">
                                    For more information on how Yoti might be used for your business, please contact <b>Gareth Narinesingh</b> at <br /> <a href="www.google.com"><b>business@yoti.com</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="cardbodyrow">
                        <Card style={{ width: '11rem' }}>
                            <br />
                            <Card.Body>
                                <Card.Title><h2 className="fontofcard">Find out more</h2></Card.Title>
                                <Card.Text className="verysmallsecond">
                                    For more information on how Yoti might be used for your business, please contact <b>Gareth Narinesingh</b> at <br /> <a href="www.google.com"><b>business@yoti.com</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="cardbodyrow">
                        <Card style={{ width: '11rem' }}>
                            <br />
                            <Card.Body>
                                <Card.Title><h2 className="fontofcard">Find out more</h2></Card.Title>
                                <Card.Text className="verysmallsecond">
                                    For more information on how Yoti might be used for your business, please contact <b>Gareth Narinesingh</b> at <br /> <a href="www.google.com"><b>business@yoti.com</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="cardbodyrow">
                        <Card style={{ width: '11rem' }}>
                            <br />
                            <Card.Body>
                                <Card.Title><h2 className="fontofcard">Find out more</h2></Card.Title>
                                <Card.Text className="verysmallsecond">
                                    For more information on how Yoti might be used for your business, please contact <b>Gareth Narinesingh</b> at <br /> <a href="www.google.com"><b>business@yoti.com</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="cardbodyrow">
                        <Card style={{ width: '11rem' }}>
                            <br />
                            <Card.Body>
                                <Card.Title><h2 className="fontofcard">Find out more</h2></Card.Title>
                                <Card.Text className="verysmallsecond">
                                    For more information on how Yoti might be used for your business, please contact <b>Gareth Narinesingh</b> at <br /> <a href="www.google.com"><b>business@yoti.com</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Banking;