// importing react-------->
import React from 'react';

// importing bootstrap components-------------------------------->
import { Navbar, Button, Card, Accordion, Modal, Container, Row, Col } from 'react-bootstrap';

// importing font icons----------------------------------------->
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

// importing style files------->
import './Styles/nestpage.css';

// importing components------------------>
import Qrcode from './Qrcode';

// importing images-------------------------------->
import yotilogo from './Images/yotilogo.png';

// rendering file------------->
function Nexty() {
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand>My Personel Bank</Navbar.Brand>
            </Navbar>
            <div className="contains">
                <h1 className='title-of'>Open a new Bank Account</h1>
                <p>This site lets you apply for a new Bank Account. If you are looking to Sign In to an existing account, <button>click here</button></p>
            </div>
            <div className="the-Accor">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                                <h5 className="getting-started">Getting started</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>To process your application we need to confirm your identity and run a few checks.<br></br>
                            Please click Next to start the process.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Button variant="primary" >Next</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle className="accor-tile" as={Button} variant="primary" eventKey="1">
                                <h5 className="getting-started">Confirm your Identity</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>We use our identity partner Yoti to confirm your identity. To share your <br></br>details with us please scan the QR code below with the Yoti app. Or for more detailed<br></br> instructions, click on ‘How to create a Yoti account' below and follow the steps.
                            <br></br>
                                <br></br>
                            Scan with Yoti to open your account &nbsp; &emsp; &emsp;<button onClick={showModal}>Display Modal</button>
                                <Modal dialogClassName="modal-10w"
                                    aria-labelledby="unknown"
                                    show={isOpen}
                                    onHide={hideModal}>
                                    <Container fluid="xs">
                                        <Row xs={12} className="unknown">
                                            <div className="yotiscanner">
                                                <Row xs={12} className="yoti-row">
                                                    <Col xs={7} className="con-scan">
                                                        <div className="containsscanner">
                                                            <div className="yoti-Auth">
                                                                <img className="profile" src={yotilogo} alt="notext" />
                                                                <h3 className="free">Yoti World</h3>
                                                                <small className="thesamllline ">is asking you to share</small>
                                                                <hr className="theline"></hr>
                                                                <h5 className="listitems"><FontAwesomeIcon icon={faAddressCard} /> Given Name(s)</h5>
                                                                <hr className="theline"></hr>
                                                                <h5 className="listitems"><FontAwesomeIcon icon={faAddressCard} /> Family Name</h5>
                                                                <hr className="theline"></hr>
                                                                <h5 className="listitems"><FontAwesomeIcon icon={faCalendarAlt} /> Date of Birth</h5>
                                                                <hr className="theline"></hr>
                                                                <h5 className="listitems"><FontAwesomeIcon icon={faHome} /> Address</h5>
                                                                <hr className="theline"></hr>
                                                                <h5 className="listitems"><FontAwesomeIcon icon={faPortrait} /> Photo Authentication</h5>
                                                                <hr className="theline"></hr>
                                                                <h5 className="listitems"><FontAwesomeIcon icon={faSyncAlt} /> Remember My ID</h5>
                                                                <hr className="theline"></hr>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={5} className="conactul">
                                                        <Row xs={5} >
                                                            <div className="bottomblue"></div>
                                                        </Row>
                                                    </Col>
                                                    <div className="scannerinhere">
                                                        <div className="scanner-head">
                                                            <h5 className="scanner-fonts">Scan with the</h5>
                                                            <h5 className="scanner-fonts">&nbsp; &emsp;Yoti app:</h5>
                                                        </div>
                                                        <div className="scanborder">
                                                            <Qrcode />
                                                        </div>
                                                        <div>
                                                            <Button className="Refreshbtn" variant="outline-info" size="sm">Refresh</Button>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </Row>
                                    </Container>
                                </Modal>
                                <br></br>
                                <br></br>
                            Don't have a Yoti? Upload your ID document in your browser.
                            <br></br>
                                <br></br>
                            Upload your document here &nbsp; &emsp; &emsp;<Button variant="primary" >SCAN ID</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}



export default Nexty;