import './CoinDetails.css'
import Chart from '../../../chart/Chart'
import { ChartUtils } from '../../../../services/ChartUtils'
import FooterDetails from './footer-details/FooterDetails'
import { ICoin } from '../../../../models/ICoin'
import React from 'react'

export default function CoinDetails(coin: ICoin) {
    return (
        <div className='coin-details'>
            <Chart data={ChartUtils.sparkline_to_datachart(coin.sparkline)} />
            <FooterDetails coin={coin}/>
        </div>
    )
}

