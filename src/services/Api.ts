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

    static async buy(coin_uuid: string, amount_of_points: number) {
        const pcoin = this.user.portfolio.find(pcoin => pcoin.coin.uuid == coin_uuid);
        if (!pcoin) {
            await this.add_to_portfolio(coin_uuid, amount_of_points);
        }
        else {
            const amount = amount_of_points / pcoin.coin.price;
            const total_amount = (amount_of_points / pcoin.coin.price) + pcoin.amount;
            const date_string = new Date(Date.now()).toLocaleString();

            const pcoin_updated: IPortfolioCoin = {
                coin: pcoin.coin,
                amount: total_amount,
                trades: [{ points_spended: amount_of_points  ,timestamp: date_string, amount: amount,  }].concat(pcoin.trades),
                value: Math.round(((total_amount * pcoin.coin.price) + Number.EPSILON) * 100) / 100
            }

            let updated_portfolio = this.user.portfolio;

            var index = updated_portfolio.indexOf(pcoin);

            if (index !== -1) {
                updated_portfolio[index] = pcoin_updated;
            }

            this.user.portfolio = updated_portfolio
            this.update_points(-amount_of_points);
        }
    }

    static async add_to_portfolio(coin_uuid: string, amount_of_points: number) {
        const coin: ICoin = await this.get_coin_by_id(coin_uuid);
        const amount = amount_of_points / coin.price;
        const date_string = new Date(Date.now()).toLocaleString();

        const portfolio_coin: IPortfolioCoin = {
            coin: coin,
            amount,
            trades: [{ points_spended: amount_of_points, timestamp: date_string, amount: amount }],
            value: amount * coin.price
        }
        this.user.portfolio = this.user.portfolio.concat([portfolio_coin]);
        this.update_points(-amount_of_points);
    }

    static remove_from_portfolio(coin_id: string) {
        this.user.portfolio.splice(this.user.portfolio.findIndex(e => e.coin.uuid == coin_id), 1)
    }

    static login = (username: string, pass: string) => (this.user.name === username && this.user.password === pass);
}