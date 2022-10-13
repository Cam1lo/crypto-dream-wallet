import { Action } from "../../models/IAction";
import { ActionTypes as AT} from "../ActionTypes";

export const portfolioReducer = (
    state:any = [],
    action: Action
) => {
    switch (action.type) {
        case AT.GET_PORTFOLIO:
            return state;
        case AT.SET_PORTFOLIO:
            return state = action.payload;
        default:
            return state
        }
}