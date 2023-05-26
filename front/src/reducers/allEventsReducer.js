const SET_ALL_EVENTS = "SET_ALL_EVENTS"

const defaultStateAll = {
    linked_groups: []
}

export default function allEventsReducer(state = defaultStateAll, action) {
    switch (action.type) {
        case SET_ALL_EVENTS:
            return {
                ...state,
                linked_groups: action.server_answer.linked_groups
            }
        default:
            return state
    }
}

export const setAllEvents = (linked_groups) => ({type:SET_ALL_EVENTS, server_answer:linked_groups})