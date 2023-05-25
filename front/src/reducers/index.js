import {combineReducers} from "redux";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import reposReducer from "./reposReducer";
import authReducer from "./authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
    auth: authReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))