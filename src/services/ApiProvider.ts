import Api from './Api';
export default class ApiProvider {

    static async login(username: string, password: string) {
        return Api.login(username, password);
    }

    static async get_user() { return await Api.get_user() };

    static async get_coins() { return await Api.get_coins(); }

    static async get_user_points() { return await Api.get_points(); }

    static async update_points(change: number) {
        await Api.update_points(change);
        return await Api.get_points();
    }

    static async get_portfolio() {
        return await Api.get_portfolio();
    }

    static async buy(coin_id: string, amount_of_points: number) {
        await Api.buy(coin_id, amount_of_points);
    }

    static async sell(coin_id: string, amount_of_coin: number) {
        Api.sell(coin_id, amount_of_coin)
    }

    static async remove_from_portfolio(coin_id: string) {
        await Api.remove_from_portfolio(coin_id);
    }
}
