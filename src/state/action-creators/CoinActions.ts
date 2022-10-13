import { ICoin } from "../../models/ICoin";
import { ActionTypes as AT } from "../ActionTypes";

export const initCoins = (coins: ICoin[]) => {
    return (dispatch: Function) => {
        dispatch({
            type: AT.SET_COINS,
            payload: coins
        })
    }
}

export const getCoins = () => {
    return (dispatch: Function) => {
        dispatch({
            type: AT.GET_COINS,
            payload: null
        })
    }
}