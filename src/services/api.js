import axios from "axios";


export default async function get_coins() {
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '583706893fmshe101a6929f7a63fp1083bcjsneea8e8466986',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    let data;

    await axios.request(options).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.error(error);
    })

    return data;
}
