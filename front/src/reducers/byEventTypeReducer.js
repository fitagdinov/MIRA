const SET_EVENTS_BY_TYPE = "SET_EVENTS_BY_TYPE"

const defaultStateAll = {
    linked_groups: [],
    number_of_events: 0
}

export default function byEventsTypeReducer(state = defaultStateAll, action) {
    switch (action.type) {
        case SET_EVENTS_BY_TYPE:
            return {
                ...state,
                linked_groups: action.server_answer.linked_groups,
                number_of_events: action.server_answer.number_of_events
            }
        default:
            return state
    }
}

export const setByTypeEvents = (linked_groups) => ({type:SET_EVENTS_BY_TYPE, server_answer:linked_groups})
