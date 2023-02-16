import axios from "../Config/axiosConfig";
export const GET_BILLS = 'GET_BILLS'
export const ADD_BILLS = 'ADD_BILLS'
export const REMOVE_BILLS = 'REMOVE_BILLS'

export const asyncAddBills = (formData, resetForm, getGeneratedBill) => {
    return (dispatch, getState) => {
        axios.post('/bills', formData, { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            console.log('Result: ', result)
            const c = getState().customers.find(ele => ele._id == result.customer)
            
            result.customer = c 
                dispatch(addBills(result))
                getGeneratedBill(result)
                resetForm()
        }) 
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const asyncGetBills = () => {
    return (dispatch) => {
        axios.get('/bills', { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            dispatch(getBills(result))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const asyncDeleteBills = (id) => {
    return (dispatch) => {
        axios.delete(`/bills/${id}`, { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            dispatch(removeBills(result))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const addBills = (data) => {
    return {
        type: ADD_BILLS,
        payload: data

    }
}

export const getBills = (data) => {
    return {
        type: GET_BILLS,
        payload: data
    }
}

export const removeBills = (data) => {
    return {
        type: REMOVE_BILLS,
        payload: data
    }
}