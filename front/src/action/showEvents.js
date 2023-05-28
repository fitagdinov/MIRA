
import axios from 'axios'
import { setEvent } from '../reducers/eventReducer';
import { setAllEvents } from '../reducers/allEventsReducer';
import { setByTypeEvents }  from '../reducers/byEventTypeReducer';
import { setIsFetching } from '../reducers/allEventsReducer';
import { setByBeautyEvent } from '../reducers/byBeautyCodeEvent';
import { setRecommendationEvents } from '../reducers/recommendationReducer';

const API_URL = 'http://178.170.197.162:4999'

export const showEvents = (sys_event_id) => { 
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}/search_event/by_sys_id?sys_external_id=${sys_event_id}`) // шлем get запрос достаем ивент
            dispatch(setEvent(response.data)) // заполняем store таской на обновление данных данными по ивенту
            
        } catch (error) {
            console.log('showEvents')
        }
    }
}

export const showByBeautyEvent = (beauty_code_event) => { 
    return async (dispatch) => {
        try{
            const response = await axios.get(`${API_URL}/search_event/by_beauty_word?beauty_string=${beauty_code_event}`) // шлем get запрос достаем ивент
            dispatch(setByBeautyEvent(response.data)) // заполняем store таской на обновление данных данными по ивенту
        } catch (e){
            console.log('Поле не может быть пустым showByBeautyEvent')
        }
    
    }
}

export const showAllEvents = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}/all_events`) // шлем get запрос достаем ивент
            dispatch(setAllEvents(response.data)) // заполняем store таской на обновление данных данными по ивенту
        } catch (error) {
            console.log('Ошибка соединенияб showAllEvents')
        }
      
    }
}

export const showREcommendationEvents = (grand_sys_id) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(`${API_URL}/member/make_classic_recommendation?grand_sys_id=${6}`) // шлем get запрос достаем ивент
            dispatch(setRecommendationEvents(response.data)) // заполняем store таской на обновление данных данными по ивент
        } catch (error) {
            console.log('Ошибка соединения при рекомендациях showREcommendationEvents')
        }
      
    }
}

export const showByTypeEvents = (event_level_3) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(`${API_URL}/search_event/by_event_type?event_level_3=${event_level_3}`) // шлем get запрос достаем ивент
            dispatch(setByTypeEvents(response.data)) // заполняем store таской на обновление данных данными по ивенту
        } catch (error) {
            console.log('Ошибка соединения showByTypeEvents')
        }
    
    }
}