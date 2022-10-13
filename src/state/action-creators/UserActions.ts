import { IUser } from "../../models/IUser";
import { ActionTypes as AT } from "../ActionTypes";

export const setUser = (user: IUser) => {
    return (dispatch: Function) => {
        dispatch({
            type: AT.SET_USER,
            payload: user
        })
    }
}
