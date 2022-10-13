import { Action } from "../../models/IAction";
import { ActionTypes as AT} from "../actionTypes";

export const userReducer = (
    state:any = {},
    action: Action
) => {
    switch (action.type) {
        case AT.GET_USER:
            return state;
        case AT.GET_USER_POINTS:
            return state.points;
        case AT.SET_USER:
            state = action.payload;
        case AT.SET_USER_POINTS:
            state.points = action.payload;
        default:
            return state
        }
}