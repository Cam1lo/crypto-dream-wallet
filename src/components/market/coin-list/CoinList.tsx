import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ICoin } from '../../../models/ICoin'
import Coin from './coin/Coin'
import './CoinList.css'

export default function CoinList() {
    const coins = useSelector((state:any) => state.coins);
    const [expanded, set_expanded] = useState<string>();
    const coin_list = coins.length > 0 ? coins : []

    function toogle_expanded(uuid: string) {
        expanded == uuid ? set_expanded('') : set_expanded(uuid);
    }

    return (
        <div className="list-container">
            {coin_list.map((coin: ICoin) => {
                return (
                    <Coin onClick={() => toogle_expanded(coin.uuid)} expanded={expanded == coin.uuid} key={coin.uuid} coin={coin} />
                )
            })}
        </div>
    );
}