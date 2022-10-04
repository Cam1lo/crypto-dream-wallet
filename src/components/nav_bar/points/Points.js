import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { get_points } from '../../../services/api';
import './Points.css'

export default function Points() {
    return (
        <div className='points-container'>
            <FontAwesomeIcon size='1x' className='points-icon' color='#ffffff' icon={faCoins}/>
            <span>{ get_points() }</span>
        </div>
    )
}