import axios from "../Config/axiosConfig";
import { asyncGetBills } from "./billActions";
import { asyncGetCustomers } from "./customerActions";
import { asyncGetproducts } from "./productActions";
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SET_USER = 'SET_USER'

export const asyncUserLogin = (formData, navigate) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                console.log(result.message)
            } else {
                alert('Successfully Logged In')
                localStorage.setItem('token', result.token)
                console.log(result)
                userLoggedIn(true) 
                console.log('isLoggedIn: ',Boolean(userLoggedIn))
                navigate('/app/account')
                axios.get('/users/account', { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}` }})
                .then((response) => {
                    const userDetails = response.data
                    console.log(userDetails) 
                    dispatch(asyncGetAccountDetails(userDetails))
                })
                .catch((err) => {
                    console.log(err.message)
                })
                axios.get('/customers', { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}` }})
                .then((response) => {
                    const customerDetails = response.data
                    console.log(customerDetails)
                    dispatch(asyncGetCustomers(customerDetails))
                })
                .catch((err) => {
                    console.log(err.message)
                })
                axios.get('/products', {headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
                .then((response) => {
                    const productDetails = response.data
                    console.log(productDetails)
                    dispatch(asyncGetproducts(productDetails))
                })
                .catch((err) => {
                    console.log(err.message)
                })
                axios.get('/bills', {headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
                .then((response) => {
                    const billsDetails = response.data
                    console.log(billsDetails)
                    dispatch(asyncGetBills(billsDetails))
                })
                .catch((err) => {
                    console.log(err.message)
                })
            }
            
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const asyncGetAccountDetails = () => {
    return (dispatch) => {
        axios.get('/users/account', {headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            dispatch(setUser(result))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const userLoggedOut = () => {
    return {
        type: LOG_OUT
    }
} 

export const userLoggedIn = (data) => {
    return {
        type: LOG_IN,
        payload: data
    }
}

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: {...data, isLoggedIn: true}
    }
}

