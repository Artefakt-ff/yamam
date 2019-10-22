import {combineReducers} from "redux";
import {childReducer} from "./Child";

export const rootReducer = combineReducers({
    child: childReducer,
});