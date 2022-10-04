import Coin from './coin/Coin'
import './CoinList.css'

export default function CoinList({ coins }) {
    const coin_list = coins.length > 0 ? coins : []

    return (
        <div className="list-container">
            {coin_list.map(coin => {
                return (
                    <Coin coin={coin}/>
                )
            })}
        </div>
    )
}