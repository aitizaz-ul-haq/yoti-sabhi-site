// importing react-------->
import React from 'react';

// importing components-------->
import Navbar from './navbar';
import Banner from './Banner';
import Banking from './Banking-title';



// rendering page------->
function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Banking />
        </div>
    );
}

export default Home;