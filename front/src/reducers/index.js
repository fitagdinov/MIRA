import {combineReducers} from "redux";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import reposReducer from "./reposReducer";
import authReducer from "./authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import eventReducer from "./eventReducer";
import allEventsReducer from "./allEventsReducer";
import byEventsTypeReducer from "./byEventTypeReducer";
import firstAnswerReducer from "./QaReducer";
import byBeautyEventReducer from "./byBeautyCodeEvent";
import recommendationEventsReducer from "./recommendationReducer";
import allGroupsReducer from "./allGroupsReducer";

const rootReducer = combineReducers({ // главный редюсер, хранит в себе вс существующие
    repos: reposReducer,
    authTest: authReducer,
    events: eventReducer,
    allEvents: allEventsReducer,
    byTypeEvents: byEventsTypeReducer, 
    firstAnswer: firstAnswerReducer,
    byBeautyEvent: byBeautyEventReducer, 
    recommendationEvents: recommendationEventsReducer,
    allGroupByEvent: allGroupsReducer 
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))