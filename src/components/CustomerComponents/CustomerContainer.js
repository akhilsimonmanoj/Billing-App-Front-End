import React, { useEffect } from 'react'
import '../../styles/Customer.css' 
import CustomerList from './CustomerList'
import { useDispatch } from 'react-redux'
import { asyncEditCustomers, asyncRemoveCustomers } from '../../actions/customerActions'
import Search from '../Routing Components/Search'
import { resetSearch } from '../../actions/searchActions'

const CustomerContainer = (props) => {
    const {_id} = props
    const dispatch = useDispatch()
    const editItem = () => {
        dispatch(asyncEditCustomers(_id))
    }

    const removeItem = () => {
        dispatch(asyncRemoveCustomers(_id))
    }
    useEffect(() => {
       return () => {
        dispatch(resetSearch())
       } 
    },[])

    return (
        <div className='grid-container'> 
        <Search />
            <div className='customer-grid card-grid'>
                <CustomerList editItem={editItem} removeItem={removeItem} />
            </div>
        </div>
    )
}

export default CustomerContainer