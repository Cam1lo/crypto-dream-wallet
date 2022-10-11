import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Provider from '../../../services/Provider';
import './Points.css'
import React, { useContext, useEffect, useState } from 'react';
import Api from '../../../services/Api';

export default function Points() {
    const [user_points, set_user_points] = useState<number>(0);
    
    useEffect(() => {
        async function get_points() {
             set_user_points(await Provider.get_user_points());
        }

        get_points();
    })

    return (
        <div className='points-container'>
            <FontAwesomeIcon size='1x' className='points-icon' color='#ffffff' icon={faCoins}/>
            <span>{user_points}</span>
        </div>
    )
}