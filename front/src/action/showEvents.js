
import axios from 'axios'
import { setEvent } from '../reducers/eventReducer';
import { setAllEvents } from '../reducers/allEventsReducer';


const API_URL = 'http://localhost:5000/'

export const showEvents = (sys_event_id) => { 
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/search_event/by_sys_id?sys_external_id=${sys_event_id}`) // шлем get запрос достаем ивент
        dispatch(setEvent(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}

export const showAllEvents = () => { 
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/all_events`) // шлем get запрос достаем ивент
        dispatch(setAllEvents(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}