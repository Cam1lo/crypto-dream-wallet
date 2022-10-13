import { useState, useEffect } from 'react';
import CoinList from './coin-list/CoinList';
import Provider from '../../services/StateProvider';
import React from 'react';
import { ICoin } from '../../models/ICoin';
import { useSelector } from 'react-redux';

export default function Market() {
    return <div>
        <CoinList/>
    </div>
}