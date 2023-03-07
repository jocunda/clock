export type State = {
    quote: any,
    author: any
}

export enum ActionType {
    quoteSuccess = "quoteSuccess",
    quoteFailed = "quoteFailed",
}

export type Action = {
    type: ActionType
    payload?: State
}
