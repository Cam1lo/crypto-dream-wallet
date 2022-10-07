import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Provider from '../../../services/provider';
import './Points.css'

export default function Points() {
    return (
        <div className='points-container'>
            <FontAwesomeIcon size='1x' className='points-icon' color='#ffffff' icon={faCoins}/>
            <span>{ Provider.get_user_points() }</span>
        </div>
    )
}