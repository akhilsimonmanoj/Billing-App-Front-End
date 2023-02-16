import axios from "../Config/axiosConfig";
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const asyncAddProduct = (formData, resetForm) => {
    return (dispatch) => {
        axios.post('/products', formData, { headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}` }})
        .then((response) => {
            const result = response.data
            dispatch(addProduct(result))
            resetForm()
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const asyncGetproducts = () => {
    return (dispatch) => {
        axios.get('/products', {headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            dispatch(getProduct(result))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const asyncEditProduct = (id, formData, resetForm) => {
    return (dispatch) => {
        axios.put(`/products/${id}`,formData, {headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            dispatch(editProduct(result))
            resetForm()
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const asyncRemoveProduct = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`, { headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((response) => {
            const result = response.data
            dispatch(removeProduct(result))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}

export const getProduct = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}

export const editProduct = (data) => {
    return {
        type: EDIT_PRODUCT,
        payload: data
    }
}

export const removeProduct = (data) => {
    return {
        type: REMOVE_PRODUCT,
        payload: data
    }
}