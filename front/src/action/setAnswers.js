
import axios from 'axios'
import { setFirstAnwer } from '../reducers/QaReducer';


const API_URL = 'http://localhost:5000/'

export const getAnswer = (grand_sys_id) => { 
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/member/add_poll_result?grand_sys_id=${grand_sys_id}`) // шлем get запрос достаем ивент
        dispatch(setFirstAnwer(response.data)) // заполняем store таской на обновление данных данными по ивенту
    }
}