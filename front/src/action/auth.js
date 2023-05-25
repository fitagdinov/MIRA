
import axios from 'axios'
import { setAuth, setCurrentLocation} from '../reducers/authReducer';
const API_URL = 'http://localhost:5000/auth_grand'


export const authUser = (fio, birthDate) => {
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}?grand_external_id=${fio}&grand_birth_date=${birthDate}`) // шлем get запрос 
        console.log(response.data)
        dispatch(setAuth(response.data)) // заполняем store таской на обновление данных 
    }
}

export const changeGrandLocation = () => {
    return async (dispatch) => {
        dispatch(setCurrentLocation()) // заполняем store таской на обновление данных 
    }
}