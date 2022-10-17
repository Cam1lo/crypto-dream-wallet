import './PCoinHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faCoins } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ICoin } from '../../../../../../models/ICoin'
import { IPortfolioCoin } from '../../../../../../models/IPortfolioCoin'
import { Utils } from '../../../../../../services/Utils'

export default function PCoinHeader(pcoin: IPortfolioCoin) {
    let coin_price = Utils.format_price(pcoin.coin.price)
    let amount_fixed = Number(pcoin.amount).toFixed(4)

    
    
    if (amount_fixed.startsWith('0.000')) {
        amount_fixed = Number(pcoin.amount).toPrecision(4)
    }

    return <div className='coin-header'>
        <div className='left'>
            <img className={'coin-icon'} src={pcoin.coin.iconUrl} />
            <div className='coin-title'>
                <span>{pcoin.coin.name}</span>
                <span className='coin-symbol'>{coin_price}</span>
            </div>
        </div>
        <div className='right'>
            <span>{amount_fixed}</span>
            <div className="change">
                <span className='time-interval'>
                    <FontAwesomeIcon size='1x' className='points-icon' icon={faCoins} />
                    {pcoin.value}
                </span>
            </div>
        </div>
    </div>
}