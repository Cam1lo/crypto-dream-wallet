import { combineReducers } from "redux";
import { coinsReducer } from "./CoinReducer";
import { portfolioReducer } from "./PortfolioReducer";
import { userReducer } from "./UserReducer";

export const reducers = combineReducers({
    user: userReducer,
    pcoins: portfolioReducer,
    coins: coinsReducer,
}) 