import React from 'react'
import { useSelector } from 'react-redux'
import { ICoin } from '../../../models/ICoin'
import Coin from './coin/Coin'
import './CoinList.css'

export default function CoinList() {
    const coins = useSelector((state:any) => state.coins);
    const coin_list = coins.length > 0 ? coins : []

    return (
        <div className="list-container">
            {coin_list.map((coin: ICoin) => {
                return (
                    <Coin key={coin.uuid} coin={coin} />
                )
            })}
        </div>
    );
}