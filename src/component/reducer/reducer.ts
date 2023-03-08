import { State, Action, ActionType } from '../../types/type'

//select greeting based on hours
function getGreeting(time: any): string {
    const hours: number = parseInt(time.substring(11, 16).split(":")[0]);
    if (hours >= 5 && hours < 12) {
        return "GOOD MORNING";
    } else if (hours >= 12 && hours < 18) {
        return "GOOD DAY";
    } else {
        return "GOOD EVENING";
    }
}

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
    greeting: "",
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
                timeZone: action.payload?.timeZone,
                greeting: getGreeting(action.payload?.time)
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