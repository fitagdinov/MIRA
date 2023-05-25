import axios from 'axios'
import { setIsFetching, setRepos } from '../reducers/reposReducer';
const API_URL = 'http://localhost:5000/auth_grand'

export const getRepos = (searchQuery = "stars:%3E1") => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
        dispatch(setRepos(response.data))
    }
}

// export const userAuth = () => dispatch => {
//     axios.post(`localhost:5000/auth_grand'`)
//     .then( userdata => 
//         dispatch({
//             type: ADD_USER,
//             payload: userdata
//         })
//     )
//     .catch( error => {
//         console.log(error);
//     });
// };

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
}) 

