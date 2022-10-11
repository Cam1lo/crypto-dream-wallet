import React, { useState, useEffect } from 'react'
import { IPortfolioCoin } from '../../models/IPortfolioCoin'
import Provider from '../../services/Provider';
import PCoins from './pcoins/PCoins';
import './Portfolio.css'

export default function Portfolio({ goToMarket }: { goToMarket: Function }) {
    const [pcoins, set_pcoins] = useState<IPortfolioCoin[]>([]);

    useEffect(() => {
        async function init_pcoins() {
            set_pcoins(await Provider.get_portfolio())
        }

        init_pcoins();
    })

    const have_coins = () => pcoins.length > 0;

    function get_no_coins_node() {
        return <div>
            <span className='no-portfolio-label'>Not Portfolio Yet</span>
            <div onClick={() => goToMarket()} className='go-to-market-btn'>Go To Market</div>
        </div>
    }

    function get_pcoin_list() {
        return <span>U have {pcoins.length} coins in the portfolio</span>
    }

    return (
        <div className={have_coins() ? "portfolio-container" : "portfolio-container no-coin-portfolio-container"}>
            {!have_coins() ? get_no_coins_node() : <PCoins pcoins={pcoins}></PCoins>}
        </div>
    )
}