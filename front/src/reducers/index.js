import {combineReducers} from "redux";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import reposReducer from "./reposReducer";
import authReducer from "./authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import eventReducer from "./eventReducer";

const rootReducer = combineReducers({ // главный редюсер, хранит в себе вс существующие
    repos: reposReducer,
    authTest: authReducer,
    events: eventReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))