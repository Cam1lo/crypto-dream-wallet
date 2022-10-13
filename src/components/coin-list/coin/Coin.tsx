import './Coin.css'
import { useState } from 'react'
import CoinHeader from './coin-header/CoinHeader'
import CoinDetails from './coin-details/CoinDetails'
import React from 'react'
import { ICoin } from '../../../models/ICoin'

export default function ListItem({ coin }: {coin: ICoin}) {
    const [expanded, set_expanded] = useState(false)
    const handleClick = () => {set_expanded(!expanded)}


    return (
        <div onClick={handleClick} className={expanded ? 'item-container expanded' : 'item-container'}>
            {CoinHeader(coin)}
            {expanded ? CoinDetails(coin) : null}
        </div>
    )
}
