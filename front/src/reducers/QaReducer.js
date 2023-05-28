const SET_FIRST_ANSWER = "SET_FIRST_ANSWER"


const defaultState = {
        grand_poll_passing: {
            "question1": [0, 0, 0, 0 ,0, 0],
            "question2": [0, 0, 0, 0, 0, 0, 0],
            "question3": [0, 0, 0, 0],
            "question4": [0, 0, 0, 0, 0],
            "question5": [0, 0, 0, 0, 0],
        },
        grand_sys_id: 3,
    }

export default function firstAnswerReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FIRST_ANSWER:
            return {
                ...state,
                grand_poll_passing: action.server_answer,
                grand_sys_id: action.server_answer
            }
        default:
            return state
    }
}


// ответ от сервера = event
export const setFirstAnwer = (answers) => ({type:SET_FIRST_ANSWER, server_answer:answers})