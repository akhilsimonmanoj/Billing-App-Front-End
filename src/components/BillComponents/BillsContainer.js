import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetSearch } from '../../actions/searchActions'
import Search from '../Routing Components/Search'
import BillsTable from './BillsTable'

const BillsContainer = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(resetSearch())
        }
    },[])
    return (
        <div>
            <Search />
            <BillsTable /> 
        </div>
    )
}

export default BillsContainer