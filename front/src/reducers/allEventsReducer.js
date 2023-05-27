const SET_ALL_EVENTS = "SET_ALL_EVENTS"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultStateAll = {
    linked_groups: [],
    isFetching: false
}

export default function allEventsReducer(state = defaultStateAll, action) {
    switch (action.type) {
        case SET_ALL_EVENTS:
            return {
                ...state,
                linked_groups: action.server_answer.linked_groups,
                isFetching: false
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

export const setAllEvents = (linked_groups) => ({type:SET_ALL_EVENTS, server_answer:linked_groups})
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, server_answer:isFetching})