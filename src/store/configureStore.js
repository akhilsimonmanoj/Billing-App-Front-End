import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from '../reducers/UserReducer'
import thunk from 'redux-thunk'
import customerReducer from '../reducers/CustomerReducer'
import productReducer from '../reducers/ProductReducer'
import billsReducer from '../reducers/BillsReducer'
import searchReducer from '../reducers/SearchReducer'

const ConfigureStore = () => {
    const store = createStore(combineReducers({
        userInfo : userReducer,
        customers: customerReducer,
        products: productReducer,
        bills: billsReducer,
        searches: searchReducer
    }), applyMiddleware(thunk))
    return store
}

export default ConfigureStore