export interface ICoin {
    uuid: string;
    symbol: string;
    name: string;
    description: string;
    color: string;
    iconUrl: string;
    websiteUrl: string;
    links: Link[];
    supply: Supply;
    ['24hVolume']: number;
    marketCap: number;
    price: number;
    btcPrice: number;
    change: number;
    rank: number;
    numberOfMarkets: number;
    numbersOfExchanges: number;
    sparkline: number[];
    allTimeHigh: {price: number, timestamp: string};
    coinrankingUrl: string;
}

interface Link {
    name: string;
    url: string;
    type: string;
}

interface Supply {
    confirmed: boolean;
    circulating: number;
    total: number;
}