const SET_FIRST_ANSWER = "SET_FIRST_ANSWER"


const defaultState = {
    sport: 0,
    theater: 0,
    work: 0,
    walk: 0,
    hunting: 0,
    excursions: 0,
}
// редюсер мероприятий 
export default function firstAnswerReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FIRST_ANSWER:
            return {
                ...state,
                sport: action.server_answer.sport,
                theater: action.server_answer.theater,
                work: action.server_answer.work,
                walk: action.server_answer.walk,
                hunting: action.server_answer.hunting,
                excursions: action.server_answer.excursions,
            }
        default:
            return state
    }
}


// ответ от сервера = event
export const setFirstAnwer = (answers) => ({type:SET_FIRST_ANSWER, server_answer:answers})