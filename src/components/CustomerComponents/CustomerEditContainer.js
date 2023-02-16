import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncEditCustomers } from '../../actions/customerActions'
import CustomerEditForm from './CustomerEditForm'

const CustomerEditContainer = (props) => {
    const {id, name, email, mobile, handleEdit } = props
    const dispatch = useDispatch()

    const formSubmit = (formData, resetForm) => {
        dispatch(asyncEditCustomers(id, formData, resetForm, handleEdit))
        
    }
    return (
        <div>
            <CustomerEditForm id={id} name={name} email={email} mobile={mobile} formSubmit={formSubmit} handleEdit={handleEdit} />
        </div>
    )
}

export default CustomerEditContainer