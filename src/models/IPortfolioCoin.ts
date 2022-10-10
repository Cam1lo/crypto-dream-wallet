import { ICoin } from "./ICoin";
import { ITrade } from "./ITrade";

export interface IPortfolioCoin {
    coin: ICoin;
    amount: number;
    trades: ITrade[];
    value: number;
}