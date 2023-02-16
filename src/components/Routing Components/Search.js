import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../actions/searchActions'

const Search = (props) => {
    const { inputData } = props
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        dispatch(setSearch(e.target.value))
    }
    return (
        <div>
            <TextField
            value={inputData}
            onChange={handleChange}
            placeholder='Search by Name'
            />
        </div>
    )
}

export default Search