// importing react------->
import React from 'react';

// importing bootstrap components---------->
import Navbar from 'react-bootstrap/Navbar';

// importing style files------>
import './Styles/navbar.css';


// rendering page---------->
function Top() {
    return (
        <div>
            <Navbar expand="lg" variant="light">
                <button className="the-menu-button"></button>
                <Navbar.Brand className="yoti" href="#" > Yoti-World</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Top;