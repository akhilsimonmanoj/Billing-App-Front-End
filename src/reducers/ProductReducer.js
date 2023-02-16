import { ADD_PRODUCT, GET_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "../actions/productActions";
const customerInitialState = []

const productReducer = (state = customerInitialState, action) => { 
    switch (action.type) {
        case ADD_PRODUCT: {
            return [{...action.payload},...state]
        }
        case GET_PRODUCT: {
            return [...action.payload]
        }
        case EDIT_PRODUCT: {
                return state.map((product) => {
                    if(product._id === action.payload._id) {
                        return {...action.payload}
                    } else {
                        return {...product}
                    }
                })
            
            }
        case REMOVE_PRODUCT: {
            return state.filter((product) => {
                return product._id !== action.payload._id
            })
            
        }
    
        default: {
            return [...state]
        }
            
    }
}

export default productReducer