import { combineReducers } from "redux";
import { login } from "./login";
import { shops } from './shops';
const reducers = combineReducers({
    login,
    shops
});

export default reducers;