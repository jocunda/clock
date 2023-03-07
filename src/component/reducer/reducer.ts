import { State, Action, ActionType } from '../../types/type'


const initialState: State = {
    quote: "",
    author: "",
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
    }
}

export { initialState, reducer }