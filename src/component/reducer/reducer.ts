import { State, Action, ActionType } from '../../types/type'


const initialState: State = {
    quote: "",
    author: "",
    time: null,
    abbreviation: null,
    dayOfWeek: null,
    dayOfYear: null,
    weekNum: null,
    city: null,
    country: null,
    timeZone: null,
}


function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionType.quoteSuccess:
            return {
                ...state,
                quote: `"${action.payload?.quote}"`,
                author: action.payload?.author
            }
        case ActionType.quoteFailed:
            return {
                ...state,
                quote: "Something is wrong, try again later",
                author: ""
            }
        case ActionType.timeSuccess:
            return {
                ...state,
                time: action.payload?.time,
                abbreviation: action.payload?.abbreviation,
                dayOfWeek: action.payload?.dayOfWeek,
                dayOfYear: action.payload?.dayOfYear,
                weekNum: action.payload?.weekNum,
                timeZone: action.payload?.timeZone
            }
        case ActionType.locationSuccess:
            return {
                ...state,
                city: action.payload?.city.toUpperCase(),
                country: action.payload?.country.toUpperCase(),
            }
        default:
            return { ...state }
    }
}

export { initialState, reducer }