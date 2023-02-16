import React from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'

const CustomerList = (props) => {
    const [customers, searches] = useSelector((state) => {
        return [state.customers, state.searches]
    }) 
    return (
        <div className='card-grid'>
            {
                customers.filter((customer) => {
                   return customer.name.toLowerCase().includes(searches.toLowerCase())
                }).map((customer) => {
                    return <CustomerItem key={customer._id} {...customer}/>
                })
            }
        </div>
    )
}

export default CustomerList