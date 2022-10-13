import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import './Points.css'
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Points() {
    const points = useSelector((state: any) => state.user_points);

    return (
        <div className='points-container'>
            <FontAwesomeIcon size='1x' className='points-icon' color='#ffffff' icon={faCoins}/>
            <span>{ points }</span>
        </div>
    )
}