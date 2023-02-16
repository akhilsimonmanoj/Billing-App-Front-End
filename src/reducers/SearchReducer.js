import { RESET_SEARCH, SET_SEARCH } from "../actions/searchActions";

const searchInitialState = ''

const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        case SET_SEARCH: {
            return action.payload
        }
        case RESET_SEARCH: {
            return ''
        }
    
        default: {
            return state
        }
    }
}

export default searchReducer