import React from "react";
import { IPortfolioCoin } from "../../../../models/IPortfolioCoin";
import PCoin from "./pcoin/PCoin";

export default function PCoinList({ pcoins }: { pcoins: IPortfolioCoin[] }) {
    return <div className="list-container">
        {pcoins.map((pcoin: IPortfolioCoin) => {
            return (
                <PCoin key={'p' + pcoin.coin.uuid} pcoin={pcoin} />
            )
        })}
    </div>
}