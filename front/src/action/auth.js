
import axios from 'axios'
import { setAuth } from '../reducers/authReducer';
const API_URL = 'http://localhost:5000/auth_grand'


export const authUser = (fio, birthDate) => {
    return async (dispatch) => {
        const parameterized_url = API_URL + '?grand_external_id=' + fio + '&grand_birth_date=' + birthDate
        console.log(parameterized_url)
        console.log(1)
        const response = await axios.get(`${API_URL}?grand_external_id=${fio}&grand_birth_date=${birthDate}`)
        console.log(1)
        dispatch(setAuth(response.data))
        // console.log(response.data)
    }
}

export const test = (fio, birthDate) => {
    console.log(fio, birthDate)
}