import axios from '../Config/axiosConfig'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const GET_CUSTOMER = 'GET_CUSTOMER'
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const asyncCreateCustomer = (formData, resetForm) => {
    return (dispatch) => {
        axios.post('/customers', formData, {headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }})
    .then((response) => {
        const result = response.data
        dispatch(addCustomers(result))
        resetForm()
    })
    .catch((err) => {
        console.log(err.messsage)
    })
    }
}

export const asyncGetCustomers = () => {
    return (dispatch) => {
        axios.get('/customers', {headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}` 
    }})
    .then((response) => {
        const result = response.data
        dispatch(getCustomers(result))
    })
    .catch((err) => {
        console.log(err.message)
    })
    }
}

export const asyncEditCustomers = (_id, values,resetForm,handleEdit) => {
    return (dispatch) => {
        console.log('id', _id, 'values: ', values)
        axios.put(`/customers/${_id}`, values, { headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }})
    .then((response) => {
        const result = response.data
        dispatch(editCustomers(result))
        
        
    })
    .catch((err) => {
        console.log(err.message)
    })
    }
}

export const asyncRemoveCustomers = (_id) => {
    return (dispatch) => {
        axios.delete(`/customers/${_id}`, { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            const result = response.data
            dispatch(removeCustomers(result))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const addCustomers = (data) => {
    return {
        type: ADD_CUSTOMER,
        payload: data
    }
}

export const getCustomers = (data) => {
    return {
        type: GET_CUSTOMER,
        payload: data
    }
}

export const editCustomers = (data) =>  {
    return {
        type: EDIT_CUSTOMER,
        payload: data
    }
}

export const removeCustomers = (data) => {
    return {
        type: REMOVE_CUSTOMER,
        payload: data
    }
}