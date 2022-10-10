import Api from './Api';

export default class Provider {
    static async login(username: string, password: string) {
        return Api.login(username, password);
    }

    static async fetch_coins() { return await Api.get_coins(); }

    static async get_user_points() { return await Api.get_points(); }

    static async update_points(change: number) {
        await Api.update_points(change);
        return await Api.get_points();
    }

    static async get_portfolio() {
        return await Api.get_portfolio();
    }

    static async add_to_portfolio(coin_id: string, amount_of_points: number) {
        await Api.add_to_portfolio(coin_id, amount_of_points);
        const data = await Api.get_portfolio();
        return data;
    }

    static async remove_from_portfolio(coin_id: string) {
        await Api.remove_from_portfolio(coin_id);
        const data = await Api.get_portfolio();
        return data;
    }
}
