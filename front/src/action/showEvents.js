
import axios from 'axios'
import { setEvent } from '../reducers/eventReducer';


const API_URL = 'http://localhost:5000//search_event/by_sys_id'

export const showEvents = (sys_event_id) => { 
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}?sys_external_id=${sys_event_id}`) // шлем get запрос достаем ивент
        dispatch(setEvent(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}