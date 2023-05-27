const SET_EVENTS_BY_TYPE = "SET_EVENTS_BY_TYPE"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultStateAll = {
    linked_groups: [],
    number_of_events: 0,
    isFetching: false
}

export default function byEventsTypeReducer(state = defaultStateAll, action) {
    switch (action.type) {
        case SET_EVENTS_BY_TYPE:
            return {
                ...state,
                linked_groups: action.server_answer.linked_groups,
                number_of_events: action.server_answer.number_of_events,
                isFetching: false,
            }
        case SET_IS_FETCHING:
            return{
                ...state,
                isFetching: action.server_answer.isFetching
            }
        default:
            return state
    }
}

export const setByTypeEvents = (linked_groups) => ({type:SET_EVENTS_BY_TYPE, server_answer:linked_groups})
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, server_answer:isFetching})
