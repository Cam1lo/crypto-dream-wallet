import React, { useState } from "react";
import { IPortfolioCoin } from "../../../../../models/IPortfolioCoin";
import PCoinDetails from "./pcoin-details/PCoinDetails";
import PCoinHeader from "./pcoin-header/PCoinHeader";
import './PCoin.css'

export default function PCoin({pcoin, expanded, onClick} : {pcoin: IPortfolioCoin, expanded: boolean, onClick: Function}) {
    const expanded_style = {
        height: ((pcoin.trades.length * 3) + 2.6) + 'rem'
    }

    return (
        <div onClick={()=> onClick()} className='item-container' style={expanded ? expanded_style : {}}>
            {PCoinHeader(pcoin)}
            {expanded ? PCoinDetails({pcoin}) : null}
        </div>
    ) 
}