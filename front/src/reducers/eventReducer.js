const SET_EVENT = "SET_EVENT"


const defaultState = {
    beauty_code_event: "",
    description_event: "",
    extend_event_id: 0,
    level1_event: "",
    level2_event: "",
    level3_event: "",
    short_event_name: "",
    sys_event_id: 0
}
// редюсер мероприятий 
export default function eventReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_EVENT:
            return {
                ...state,
                beauty_code_event: action.server_answer.beauty_code_event,
                description_event: action.server_answer.description_event,
                extend_event_id: action.server_answer.extend_event_id,
                level1_event: action.server_answer.level1_event,
                level2_event: action.server_answer.level2_event,
                level3_event: action.server_answer.level3_event,
                short_event_name: action.server_answer.short_event_name,
                sys_event_id: action.server_answer.sys_event_id
            }
        default:
            return state
    }
}


// ответ от сервера = event
export const setEvent = (event) => ({type:SET_EVENT, server_answer:event})

