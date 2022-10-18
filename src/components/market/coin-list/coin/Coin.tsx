import './Coin.css'
import { useState } from 'react'
import CoinHeader from './coin-header/CoinHeader'
import CoinDetails from './coin-details/CoinDetails'
import React from 'react'
import { ICoin } from '../../../../models/ICoin'

export default function ListItem({ coin, expanded, onClick}: {coin: ICoin, expanded: boolean, onClick: Function}) {


    return (
        <div onClick={() => onClick()} className={expanded ? 'item-container expanded' : 'item-container'}>
            {CoinHeader(coin)}
            {expanded ? CoinDetails(coin) : null}
        </div>
    )
}
