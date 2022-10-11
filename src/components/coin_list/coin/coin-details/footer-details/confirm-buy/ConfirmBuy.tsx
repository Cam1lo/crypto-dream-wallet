import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Provider from '../../../../../../services/Provider';
import './ConfirmBuy.css';
import { ICoin } from '../../../../../../models/ICoin';
import React from 'react';

type Props = {
    coin: ICoin,
    value: number,
    onChange: Function
}

export default function ConfirmBuy({ coin, value, onChange }: Props) {
    const [coin_buying, set_coin_buying] = useState(true); 
    const [user_points, set_user_points] = useState<number>(0);
    
    useEffect(() => {
        async function get_points() {
             set_user_points(await Provider.get_user_points());
        }

        get_points();
    })
    const buying_with = () => coin_buying ? 
    <FontAwesomeIcon size='1x' className='confirm-points-icon' color='#000' icon={faCoins}/> : 
    <img className={'crypto-coin-icon'} src={coin.iconUrl} />; 
    

    return <div className='confirm-buy-element-container'>
         <div onClick={() => set_coin_buying(!coin_buying)}>
            { buying_with() }
         </div>
         <input value={value} onChange={(e) => onChange(e.target.value)} className='amount' type="number" min={1} max={ user_points } />
    </div>
}