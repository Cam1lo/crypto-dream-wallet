import './CoinDetails.css'
import Chart from '../../../chart/Chart'
import sparkline_to_datachart from '../../../../services/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { formatNumber } from '../../../../services/utils'
import ReactTooltip from 'react-tooltip';

export default function CoinDetails(coin) {
    return (
        <div className='coin-details'>
            <Chart data={sparkline_to_datachart(coin.sparkline)} />
            {FooterDetails(coin)}
        </div>
    )
}

function FooterDetails(coin) {
    const handleLinkClick = () => {
        window.open(coin.coinrankingUrl)
    }

    return <div className='footer-details'>
        <div className='stats'>
            <div className='stat'>
                <div>
                    <FontAwesomeIcon className='stat-icon' icon={faChartSimple} />
                    <span>Volume</span>
                </div>
                <span>{`$ ${formatNumber(coin['24hVolume'])}`}</span>
            </div>
            <div className='stat'>
                <div>
                    <FontAwesomeIcon className='stat-icon' icon={faChartPie} />
                    <span>Market Cap</span>
                </div>
                <span>{`$ ${formatNumber(coin.marketCap)}`}</span>
            </div>
        </div>
        <div className='stats-right'>
            <div className='buy-btn'>Buy</div>
            <FontAwesomeIcon onClick={handleLinkClick} data-tip="Full Details" className='external-icon' icon={faArrowUpRightFromSquare} />
        </div>
        <ReactTooltip place="top" type="dark" effect="float" />
    </div>
}
