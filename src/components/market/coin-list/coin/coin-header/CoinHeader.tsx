import './CoinHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ICoin } from '../../../../../models/ICoin'

export default function CoinHeader(coin: ICoin) {
    let coin_price = Number(coin.price).toFixed(4)

    if (coin_price === '0.0000') {
        coin_price = Number(coin.price).toPrecision(4)
    }

    return <div className='coin-header'>
        <div className='left'>
            <img className={'coin-icon'} src={coin.iconUrl} />
            <div className='coin-title'>
                <span>{coin.name}</span>
                <span className='coin-symbol'>{"(" + coin.symbol + ")"}</span>
            </div>
        </div>
        <div className='right'>
            <span>{"$ " + coin_price}</span>
            <div className="change">
                <span className='time-interval'>24h</span>
                <FontAwesomeIcon icon={coin.change >= 0 ? faArrowTrendUp : faArrowTrendDown} color={coin.change >= 0 ? '#4be2a3' : "#dc0057"} />
                <span className={coin.change >= 0 ? 'trend-up' : 'trend-down'}>{coin.change}</span>
            </div>
        </div>
    </div>
}