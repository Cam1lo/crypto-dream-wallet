import './Coin.css'
import { useState } from 'react'
import CoinHeader from './coin-header/CoinHeader'
import CoinDetails from './coin-details/CoinDetails'

export default function ListItem({ coin }) {
    const [expanded, set_expanded] = useState(false)
    const handleClick = () => {set_expanded(!expanded)}


    return (
        <div onClick={handleClick} className={expanded ? 'item-container expanded' : 'item-container'}>
            {CoinHeader(coin)}
            {expanded ? CoinDetails(coin) : null}
        </div>
    )
}
