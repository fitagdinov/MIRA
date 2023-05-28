const SET_RECOMMENDATION_EVENTS = "SET_RECOMMENDATION_EVENTS"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultStateAll = {
    grand_sys_id: 0,
    number_of_recommendations: '',
    recommended_events: [],
    isFetching: false
}

export default function recommendationEventsReducer(state = defaultStateAll, action) {
    switch (action.type) {
        case SET_RECOMMENDATION_EVENTS:
            return {
                ...state,
                grand_sys_id: action.server_answer.grand_sys_id,
                number_of_recommendations: action.server_answer.number_of_recommendations,
                recommended_events: action.server_answer.recommended_events,
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

export const setRecommendationEvents = (recommended_events) => ({type:SET_RECOMMENDATION_EVENTS, server_answer:recommended_events})
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, server_answer:isFetching})