import React from "react";
import { IPortfolioCoin } from "../../../../../../models/IPortfolioCoin";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITrade } from "../../../../../../models/ITrade";
import { Utils } from "../../../../../../services/Utils";
import './PCoinDetails.css'

export default function PCoinDetails({ pcoin }: { pcoin: IPortfolioCoin }) {
    return <div className="pcoin-details-container">
        <div className="ptranscations-list">
            {pcoin.trades.map((trade: ITrade) => {
                const arrowIcon = trade.amount > 0 ? faArrowDown : faArrowUp 
                const color = trade.amount >= 0 ? '#4be2a3' : "#dc0057"
                return (
                    <div key={trade.timestamp} className="ptransaction">
                        <div className="ptransaction-left">
                            <FontAwesomeIcon icon={arrowIcon} color={color} size='2x'/>
                            <span className="ptransaction-amount">{trade.amount} for {trade.points_spended}</span>
                        </div>
                        <span>{trade.timestamp}</span>
                    </div>
                )
            })}
        </div>
    </div>
}