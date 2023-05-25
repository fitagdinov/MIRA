const SET_AUTH = "SET_AUTH"
const SET_LOCATION = "SET_LOCATION"

const defaultState = {
    grand_address: "default",
    grand_exist: false,
    grand_name: "",
    grand_sex: "",
    grand_surname: "",
    grand_sys_id: true
}
// редюсер пользователя
export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                grand_address: action.server_answer.grand_address,
                grand_exist: action.server_answer.grand_exist,
                grand_name: action.server_answer.grand_name,
                grand_sex: action.server_answer.grand_sex,
                grand_surname: action.server_answer.grand_surname,
                grand_sys_id: action.server_answer.grand_sys_id
            }
        case SET_LOCATION:
            return {
                ...state,
                grand_address: 'Test multiple reducer',
            }
        default:
            return state
    }
}

// ответ от сервера = auth_event
export const setAuth = (auth_event) => ({type:SET_AUTH, server_answer:auth_event}) // так надо 
