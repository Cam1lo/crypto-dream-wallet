import React, { useState } from "react";
import { IPortfolioCoin } from "../../../../../models/IPortfolioCoin";
import PCoinHeader from "./pcoin-header/PCoinHeader";

export default function PCoin({pcoin} : {pcoin: IPortfolioCoin}) {
    const [expanded, set_expanded] = useState(false)
    const handleClick = () => {set_expanded(!expanded)}


    return (
        // <div onClick={handleClick} className={expanded ? 'item-container expanded' : 'item-container'}>
        <div onClick={handleClick} className={'item-container'}>
            {PCoinHeader(pcoin)}
        </div>
    ) 
}