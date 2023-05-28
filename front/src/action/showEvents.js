
import axios from 'axios'
import { setEvent } from '../reducers/eventReducer';
import { setAllEvents } from '../reducers/allEventsReducer';
import { setByTypeEvents }  from '../reducers/byEventTypeReducer';
import { setIsFetching } from '../reducers/allEventsReducer';
import { setByBeautyEvent } from '../reducers/byBeautyCodeEvent';

const API_URL = 'http://178.170.197.162:80/'

export const showEvents = (sys_event_id) => { 
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/search_event/by_sys_id?sys_external_id=${sys_event_id}`) // шлем get запрос достаем ивент
        dispatch(setEvent(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}

export const showByBeautyEvent = (beauty_code_event) => { 
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/search_event/by_beauty_word?beauty_string=${beauty_code_event}`) // шлем get запрос достаем ивент
        dispatch(setByBeautyEvent(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}

export const showAllEvents = () => {
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/all_events`) // шлем get запрос достаем ивент
        dispatch(setAllEvents(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}


export const showByTypeEvents = (event_level_3) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`${API_URL}/search_event/by_event_type?event_level_3=${event_level_3}`) // шлем get запрос достаем ивент
        dispatch(setByTypeEvents(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}