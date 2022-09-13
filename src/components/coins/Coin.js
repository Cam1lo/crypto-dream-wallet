import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import './Coin.css'

export default function Coin() {
    return (
        <div className='coins-container'>
            <FontAwesomeIcon size='1x' className='coins-icon' color='#ffffff' icon={faCoins}/>
            <span>1000</span>
        </div>
    )
}