
import axios from 'axios'
import { setAllGroupsEvents } from '../reducers/allGroupsReducer';
import { setGroupsIsFetching } from '../reducers/allGroupsReducer';

const API_URL = 'http://178.170.197.162:4999'

export const showGroups = (sys_event_id) => { 
    return async (dispatch) => {
        try {
            dispatch(setGroupsIsFetching(true))
            const response = await axios.get(`${API_URL}//search_group/by_event_sys_id?sys_event_id=${sys_event_id}`) // шлем get запрос достаем ивент
            dispatch(setAllGroupsEvents(response.data)) // заполняем store таской на обновление данных данными по ивенту
            // console.log(response.data)
        } catch (error) {
            console.log('showGroups')
        }
    }
}