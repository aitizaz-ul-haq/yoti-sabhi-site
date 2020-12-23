// importing react-------->
import React from 'react';

// importing modules------------------->
import { QRNormal } from 'react-qrbtf';


function Qrcoding() {
    return (
        <QRNormal
            value="react-qrbtf"
            className="my-qrcode"
            styles={{ svg: { width: "275px" } }}
            type="round"
            size={50}
            opacity={80}
            posType="planet"
            otherColor="#00D084"
            posColor="#00D084"
        />
    );

}

export default Qrcoding;