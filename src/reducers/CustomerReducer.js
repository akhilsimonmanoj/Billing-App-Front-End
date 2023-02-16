import { ADD_CUSTOMER, GET_CUSTOMER, EDIT_CUSTOMER, REMOVE_CUSTOMER } from "../actions/customerActions"
const customerInitialState = []

const customerReducer = (state = customerInitialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER: {
            return [{...action.payload}, ...state]
        }
        case GET_CUSTOMER: {
            return [...action.payload]
        }
        case EDIT_CUSTOMER: {
            return state.map((customer) => {
                if(customer._id === action.payload._id) {
                    return {...action.payload}
                } else {
                    return {...customer}
                }
            })
            
        }
        case REMOVE_CUSTOMER: {
            return state.filter((customer) => {
                return customer._id !== action.payload._id
            })
        }
    
        default: {
            return [...state]
        }
            
    }
}

export default customerReducer