import Provider from '../services/provider';

export default async function test() {
    const coins = await Provider.fetch_coins();
    console.log('FETCHING COINS: ', {coins});

    const login = await Provider.login('Camilo Nodarse', '123');
    console.log('LOGIN: ', {login});

    const user_points = await Provider.get_user_points();
    console.log('USER POINTS: ', {user_points});

    const user_points_after_buy = await Provider.update_points(-100);
    console.log('USER POINTS AFTER BUY: ', {user_points_after_buy});

    const user_portfolio = await Provider.get_portfolio();
    console.log('USER PORTFOLIO: ', {user_portfolio});

    const user_portfolio_aftet_coin_added = await Provider.add_to_portfolio({id: 1, name: 'Dummy', amount: 3});
    console.log('USER PORTFOLIO AFTER COIN ADDED: ', {user_portfolio_aftet_coin_added});

    const user_portfolio_after_coin_removed = await Provider.remove_from_portfolio(1);
    console.log('USER PORTFOLIO AFTER COIN REMOVED: ', {user_portfolio_after_coin_removed});

}