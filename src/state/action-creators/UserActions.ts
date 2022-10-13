import { IUser } from "../../models/IUser";
import { ActionTypes as AT } from "../ActionTypes";

export const initUser = (user: IUser) => {
    return (dispatch: Function) => {
        dispatch({
            type: AT.SET_USER,
            payload: user
        })
    }
}

export const changeUserPoints = (amount: number) =>  {
    return (dispatch: Function) => {
        dispatch({
            type: AT.SET_USER_POINTS,
            payload: amount
        });
    }
}