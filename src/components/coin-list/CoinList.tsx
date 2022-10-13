import React from 'react'
import { ICoin } from '../../models/ICoin'
import Coin from './coin/Coin'
import './CoinList.css'

export default function CoinList({ coins }: {coins: ICoin[]}) {
    const coin_list = coins.length > 0 ? coins : []

    return (
        <div className="list-container">
            {coin_list.map((coin: ICoin) => {
                return (
                    <Coin coin={coin} />
                )
            })}
        </div>
    );
}