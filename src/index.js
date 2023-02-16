import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './store/configureStore'
import { asyncGetAccountDetails, userLoggedIn } from './actions/userActions';
import { asyncGetCustomers } from './actions/customerActions';
import { asyncGetproducts } from './actions/productActions';
import { asyncGetBills } from './actions/billActions';

const store = ConfigureStore()

store.subscribe(() => {
  console.log(store.getState())
})

if(localStorage.getItem('token')){
  store.dispatch(userLoggedIn(true))
  store.dispatch(asyncGetAccountDetails())
  store.dispatch(asyncGetCustomers())
  store.dispatch(asyncGetproducts())
  store.dispatch(asyncGetBills())
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  , document.getElementById('root')
)
