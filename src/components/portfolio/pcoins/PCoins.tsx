import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IPortfolioCoin } from "../../../models/IPortfolioCoin";
import { Utils } from "../../../services/Utils";
import './PCoins.css'
import PCoinList from "./pcoins_list/PCoinList";

export default function PCoins({ pcoins }: { pcoins: IPortfolioCoin[] }) {
    const [portfolio_value, set_portfolio_value] = useState<string>(get_portfolio_value());

    function get_portfolio_value(): string {
        let value = 0;
        pcoins.forEach(pcoin => {
            value += pcoin.value;
        })

        return Utils.format_price(value);
    }

    return <div className="pcoins-list-container">
        <div className="portfolio-value">
            <FontAwesomeIcon className='portfolio-icon-value' icon={faCoins} />
            {portfolio_value}
        </div>
        <PCoinList pcoins={pcoins}></PCoinList>
    </div>
}