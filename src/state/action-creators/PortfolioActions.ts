import { IPortfolioCoin } from "../../models/IPortfolioCoin";
import { ActionTypes as AT } from "../ActionTypes";

export const getPortfolio = () => {
    return (dispatch: Function) => {
        dispatch({
            type: AT.SET_USER,
            payload: null
        })
    }
}

export const setPortfolio = (pcoins: IPortfolioCoin[]) =>  {
    return (dispatch: Function) => {
        dispatch({
            type: AT.SET_PORTFOLIO,
            payload: pcoins
        });
    }
}