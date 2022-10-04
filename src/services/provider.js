import get_coins from './api'; 

export default async function fetch_coins() {
    const data = await get_coins();
    return data.data.coins;
}