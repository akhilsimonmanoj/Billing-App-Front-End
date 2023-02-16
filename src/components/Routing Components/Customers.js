import React from 'react'
import '../../styles/Customer.css' 
import CustomerForm from '../CustomerComponents/CustomerForm'
import CustomerContainer from '../CustomerComponents/CustomerContainer'
import { useDispatch } from 'react-redux'
import { asyncCreateCustomer } from '../../actions/customerActions'


const Customers = (props) => {
    const {name, mobile, email} = props
    const dispatch = useDispatch()

    const formSubmit = (formData, resetForm) => {
        dispatch(asyncCreateCustomer(formData, resetForm))
    }
    return (
        <div className='grid-container'>
            <div>
                <CustomerContainer />
            </div>
            <CustomerForm name={name} email={email} mobile={mobile} formSubmit={formSubmit} /> 
        </div>
    )
}

export default Customers