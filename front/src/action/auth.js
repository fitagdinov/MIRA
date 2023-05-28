
import axios from 'axios'
import { setAuth, setCurrentLocation} from '../reducers/authReducer';
const API_URL = 'http://178.170.197.162:4999/auth_grand'


export const authUser = (fio, birthDate) => {
    return async (dispatch) => {

        try {
            const response = await axios.get(`${API_URL}?grand_external_id=${fio}&grand_birth_date=${birthDate}`) // шлем get запрос 
            dispatch(setAuth(response.data)) // заполняем store таской на обновление данных 
            if (response.data.grand_exist == true){ // проверяем существует ли user в БД
                localStorage.setItem('fio', fio) // заполняем localStorage значением true -> пользователь авторизован
                localStorage.setItem('birthDate', birthDate)
                localStorage.setItem('isAuth', true)
                localStorage.setItem('grandSysId', response.data.grand_sys_id)
                localStorage.setItem('grandPollStatus', response.data.grand_poll_status)
            }
            else {
                localStorage.setItem('fio', 101387411) 
                localStorage.setItem('birthDate', '1937-02-17')
                localStorage.setItem('isAuth', false)
            }
        } catch (e) {
            console.log('Поля авторизации не могут быть путсыми')
        }
    }
}

