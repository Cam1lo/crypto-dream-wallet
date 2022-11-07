import React, { useState } from "react";
import { IPortfolioCoin } from "../../../../models/IPortfolioCoin";
import PCoin from "./pcoin/PCoin";

export default function PCoinList({ pcoins }: { pcoins: IPortfolioCoin[] }) {
    const [expanded, set_expanded] = useState<string>();

    function toogle_expanded(uuid: string) {
        expanded == uuid ? set_expanded('') : set_expanded(uuid);
    }

    return <div className="list-container p-list-container">
        {pcoins.map((pcoin: IPortfolioCoin) => {
            return (
                <PCoin expanded={expanded == pcoin.coin.uuid}
                    onClick={() => toogle_expanded(pcoin.coin.uuid)}
                    key={'p' + pcoin.coin.uuid}
                    pcoin={pcoin} />
            )
        })}
    </div>
}