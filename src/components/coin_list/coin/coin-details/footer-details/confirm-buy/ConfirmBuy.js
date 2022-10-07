import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Provider from '../../../../../../services/provider';
import './ConfirmBuy.css';

export default function ConfirmBuy({ coin, value, onChange }) {
    const [coin_buying, set_coin_buying] = useState(true); 

    const buying_with = () => coin_buying ? 
    <FontAwesomeIcon size='1x' className='confirm-points-icon' color='#000' icon={faCoins}/> : 
    <img className={'crypto-coin-icon'} src={coin.iconUrl} />; 
    

    return <div className='confirm-buy-element-container'>
         <div onClick={() => set_coin_buying(!coin_buying)}>
            { buying_with() }
         </div>
         <input value={value} onChange={(e) => onChange(e.target.value)} className='amount' type="number" max={ Provider.get_user_points() } />
    </div>
}