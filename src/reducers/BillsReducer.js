import { ADD_BILLS, GET_BILLS, REMOVE_BILLS } from "../actions/billActions"
const billInitialState = []

const billsReducer = (state = billInitialState, action) => {
    switch (action.type) {
        case ADD_BILLS: {
            return [{...action.payload}, ...state] 
        }
        case GET_BILLS: {
            return [...action.payload]
        }
        case REMOVE_BILLS: {
            return state.filter((bill) => {
                return bill._id !== action.payload._id
            })
            
        }
        default: {
            return [...state]
        }
    }
} 

export default billsReducer