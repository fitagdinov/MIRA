const SET_ALL_GROUPS_EVENTS = "SET_ALL_GROUPS_EVENTS"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultStateAll = {
    linked_groups: [],
    sys_event_id: 0,
    isFetching: false
}

export default function allGroupsReducer(state = defaultStateAll, action) {
    switch (action.type) {
        case SET_ALL_GROUPS_EVENTS:
            return {
                ...state,
                linked_groups: action.server_answer.linked_groups,
                sys_event_id: action.server_answer.sys_event_id,
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

export const setAllGroupsEvents = (allgroup) => ({type:SET_ALL_GROUPS_EVENTS, server_answer:allgroup})
export const setGroupsIsFetching = (isFetching) => ({type:SET_IS_FETCHING, server_answer:isFetching})