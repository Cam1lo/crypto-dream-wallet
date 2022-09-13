import ListItem from '../list-item/ListItem'
import './CoinList.css'

export default function CoinList({ coins }) {
    const coin_list = coins.length > 0 ? coins : []

    const hardcoded_coin = {
        uuid: "Qwsogvtv82FCd",
        symbol: "BTC",
        name: "Bitcoin",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        marketCap: "415085964287",
        price: "21678.11883586849",
        listedAt: 1330214400,
        tier: 1,
        change: "1.64",
        rank: 1,
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        Volume: "44943339569",
        btcPrice: "1",
    }

    return (
        <div className="list-container">
            {coin_list.map(coin => {
                return (
                    <ListItem coin={coin}/>
                )
            })}
        </div>
    )
}