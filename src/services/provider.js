import Api from './api'; 

export default class Provider {
    static async login(username, password) {
        return Api.login(username, password);
    }

    static async fetch_coins() {
        const data = await Api.get_coins();
        return data.data.coins;
    }

    static async get_user_points() {
        const data = await Api.get_points();
        return data;
    }

    static async update_points(change) {
        await Api.update_points(change);
        const data = await Api.get_points();
        return data;
    }

    static async get_portfolio() {
        const data = await Api.get_portfolio();
        return data;
    }

    static async add_to_portfolio(coin) {
        await Api.add_to_portfolio(coin);
        const data = await Api.get_portfolio();
        return data;
    }

    static async remove_from_portfolio(coin_id) {
        await Api.remove_from_portfolio(coin_id);
        const data = await Api.get_portfolio();
        return data;
    }
}
