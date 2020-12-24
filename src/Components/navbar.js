// importing react------->
import React from 'react';

// importing bootstrap components---------->
import { Navbar, Container } from 'react-bootstrap';

// importing style files------>
import './Styles/navbar.css';


// rendering page---------->
function Top() {
    return (
        <div>
            <Container fluid="xs">
                <Navbar expand="lg" variant="light">
                    <button className="the-menu-button"></button>
                    <Navbar.Brand className="yoti" href="#" > Yoti-World</Navbar.Brand>
                </Navbar>
            </Container>
        </div>
    );
}

export default Top;