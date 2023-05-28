
import axios from 'axios'
import { setFirstAnwer } from '../reducers/QaReducer';

const API_URL = 'http://178.170.197.162:4999'


export const getAnswer = (results) => { 
    return async (dispatch) => {
        const response = await axios.post(`${API_URL}/member/add_poll_result`, results) // шлем get запрос достаем ивент
        dispatch(setFirstAnwer(results)) // заполняем store таской на обновление данных данными по ивенту
        console.log(1)
    }
}