// importing react-------->
import React from 'react';

// importing modules------------------->
import { QRNormal } from 'react-qrbtf';


function Qrcoding() {
    return (
        <QRNormal
            value="react-qrbtf"
            className="my-qrcode"
            styles={{ svg: { width: "200px", height: "200px" } }}
            type="round"
            size={50}
            opacity={80}
            posType="planet"
            otherColor="#000000"
            posColor="#000000"
        />
    );

}

export default Qrcoding;