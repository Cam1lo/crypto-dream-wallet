import axios from "axios";
import { ICoin } from "../models/ICoin";
import { IUser } from "../models/IUser";
import { IPortfolioCoin } from "../models/IPortfolioCoin";
import { ApiOptionProvider } from "../ApiOptionProvider";


export default class Api {
    static user: IUser = {
        name: 'Camilo Nodarse',
        email: 'camilojosecnc@gmail.com',
        password: '123',
        points: 259,
        portfolio: [],
    }

    static async get_user(): Promise<IUser> {
        return await this.user;
    }

    static async get_coins(): Promise<ICoin[]> {
        return axios.request(ApiOptionProvider.all_coins_options()).then(function (response) {
            let data = response.data.data
            return data.coins;
        }).catch(function (error) {
            console.log(error)
        })
    }

    static async get_coin_by_id(coin_uuid: string): Promise<ICoin> {
        return axios.request(ApiOptionProvider.coin_by_id_options(coin_uuid)).then(function (response) {
            let data = response.data.data
            return data.coin;
        }).catch(function (error) {
            console.log(error)
        }) 
    }

    static get_portfolio() { return this.user.portfolio }

    static get_points() { return this.user.points }

    static update_points(change: number) { this.user.points = Number(this.user.points) + change }

    static async add_to_portfolio(coin_uuid: string, amount_of_points: number) {
        const coin: ICoin = await this.get_coin_by_id(coin_uuid);
        const amount = amount_of_points / coin.price;
        console.log(amount_of_points, coin.price, amount);
        const portfolio_coin: IPortfolioCoin = {
            coin: coin,
            amount,
            trades: [{timestamp: Date.now().toString(), amount: amount}],
            value: amount * coin.price
        }
        this.user.portfolio = [portfolio_coin];
    }

    static remove_from_portfolio(coin_id: string) { 
        this.user.portfolio.splice(this.user.portfolio.findIndex(e => e.coin.uuid == coin_id),1) 
    }

    static login = (username: string, pass: string) => (this.user.name === username && this.user.password === pass);
}