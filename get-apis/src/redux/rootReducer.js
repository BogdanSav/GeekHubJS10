import { combineReducers } from "redux";
import apiReducer from "./apiReducer";

export const rootReducer = combineReducers({
    apis: apiReducer
})