import { LOG_IN, LOG_OUT, SET_USER } from "../actions/userActions";

const userInitialState = {} 

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case LOG_IN : {
            return {...state, isLoggedIn: action.payload } 
        } 

        case LOG_OUT : {
            return {}
        }

        case SET_USER: {
            return {...state, ...action.payload}
        }
    
        default: {
            return {...state}
        }
    }
}

export default userReducer