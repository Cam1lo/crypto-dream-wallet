import React, { useState } from 'react';
import './GetMoreCoins.css'


function GetMoreCoins() {
    const [hover, setHover] = useState(false)

    return (
        <div onMouseOver={() => { setHover(true) }} onMouseOut={() => { setHover(false) }}>
            <div className={hover ? 'extended corner-dot' : 'corner-dot'}>
            </div>
            <div className={hover ? 'get-more-coins-container' : 'hide'}>
                <div className="get-more-coins-card">
                    <div className="get-more-coins-card-header">+0.5 points</div>
                    <div className="get-more-coins-card-footer">click</div>
                </div>
            </div>
        </div>
    );
}

export default GetMoreCoins;