import { Action } from "../../models/IAction";
import { ActionTypes as AT} from "../ActionTypes";

export const userReducer = (
    state:any = {},
    action: Action
) => {
    Object.assign(state, action.payload)

    switch (action.type) {
        case AT.GET_USER:
            return {...state};
        case AT.SET_USER:
            state = action.payload;
            return {...state};
        default:
            return state
        }
}