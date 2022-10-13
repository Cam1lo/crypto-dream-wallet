import { stat } from "fs";
import { Action } from "../../models/IAction";
import { ActionTypes as AT} from "../ActionTypes";

export const coinsReducer = (
    state:any = [],
    action: Action
) => {
    switch (action.type) {
        case AT.GET_COINS:
            return state;
        case AT.SET_COINS: 
            state = action.payload;
            return state
        default:
            return state
        }
}