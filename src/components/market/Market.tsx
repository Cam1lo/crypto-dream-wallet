import { useState, useEffect } from 'react';
import CoinList from './coin-list/CoinList';
import Provider from '../../services/Provider';
import React from 'react';
import { ICoin } from '../../models/ICoin';

export default function Market() {
    const [coins, set_coins] = useState<ICoin[]>([])
    
    useEffect(() => {
        async function fetch() {
            const coins_fetched = await Provider.fetch_coins();
            set_coins(coins_fetched);
        }
        fetch();
    }, []);

    return <div>
        <CoinList coins={coins}/>
    </div>
}