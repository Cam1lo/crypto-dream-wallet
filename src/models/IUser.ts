import { IPortfolioCoin } from "./IPortfolioCoin";

export interface IUser {
    name: string;
    email: string;
    password: string;
    points: number;
    portfolio: IPortfolioCoin[]
}