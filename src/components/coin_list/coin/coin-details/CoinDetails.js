import './CoinDetails.css'
import Chart from '../../../chart/Chart'
import sparkline_to_datachart from '../../../../services/data'
import FooterDetails from './footer-details/FooterDetails'

export default function CoinDetails(coin) {
    return (
        <div className='coin-details'>
            <Chart data={sparkline_to_datachart(coin.sparkline)} />
            <FooterDetails coin={coin}/>
        </div>
    )
}

