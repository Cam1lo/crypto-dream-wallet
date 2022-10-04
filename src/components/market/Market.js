import { useState, useEffect } from 'react';
import CoinList from '../coin_list/CoinList';
import fetch_coins from '../../services/provider';

export default function Market() {
    const [coins, set_coins] = useState([])
    
    useEffect(() => {
        async function fetch() {
            const coins_fetched = await fetch_coins();
            set_coins(coins_fetched);
        }
        fetch();
    }, []);

    return <div>
        <CoinList coins={coins}/>
    </div>
}