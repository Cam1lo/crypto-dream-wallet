import axios from "axios";
import { options } from "../options";

export default class Api {
    static user = {
        name: 'Camilo Nodarse',
        email: 'camilojosecnc@gmail.com',
        password: '123',
        points: '250',
        portfolio: [],
    }

    static async get_coins() {
        let data;

        await axios.request(options).then(function (response) {
            data = response.data
        }).catch(function (error) {
            console.error(error);
        })

        return data;
    }

    static get_portfolio() { return this.user.portfolio }

    static get_points() { return this.user.points }

    static update_points(change) { this.user.points = Number(this.user.points) + change }

    static add_to_portfolio(coin) { this.user.portfolio.push(coin) }

    static remove_from_portfolio(coin_id) { this.user.portfolio.splice(this.user.portfolio.findIndex(e => e.id == coin_id),1) }

    static login = (username, pass) => (this.user.name === username && this.user.password === pass);
}