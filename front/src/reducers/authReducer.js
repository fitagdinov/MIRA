const SET_AUTH = "SET_AUTH"


const defaultState = {
    grand_address: ''
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                grand_address: action.payload.grand_address
            }
        default:
            return state
    }
}

export const setAuth = (auth) => ({type:SET_AUTH, payload:auth})

