export type State = {
    quote?: any,
    author?: any,
    time?: any,
    abbreviation?: any,
    dayOfWeek?: any,
    dayOfYear?: any,
    weekNum?: any,
    city?: any,
    country?: any,
    timeZone?: any,
    greeting?: string | undefined
}

export enum ActionType {
    quoteSuccess = "quoteSuccess",
    quoteFailed = "quoteFailed",
    timeSuccess = "timeSuccess",
    locationSuccess = "locationSuccess",
}

export type Action = {
    type: ActionType
    payload?: State
}
