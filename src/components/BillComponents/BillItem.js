import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import TableCell from '@mui/material/TableCell'
import BillsDialog from './BillsDialog'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import { getProduct } from '../../Selectors/productSelectors'
import { asyncDeleteBills } from '../../actions/billActions'

const BillItem = (props) => {
    const {_id, date, customer, total, lineItems} = props 
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const [customers, products] = useSelector((state) => { 
        return [state.customers, state.products]
    })
    const handleDialogOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleRemove = () => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove)
        {
            dispatch(asyncDeleteBills(_id))
        }
    }
    const formattedDate = (date) => {
        return new Date(date).toISOString().split('T')[0]
    }
    return (
        <>
            {
                 open && 
                 <BillsDialog 
                 date={date}
                 customer={customer}
                 total={total}
                 lineItems={lineItems}
                 open={open}
                 handleClose={handleClose}
                 getProduct={getProduct}
                 customers={customers}
                 products={products}
                 />
            }
            <TableCell>{formattedDate(date)}</TableCell>
            <TableCell> {customer.name} </TableCell>
            <TableCell>{total}</TableCell>
            <TableCell>
                <IconButton onClick={handleDialogOpen}>
                <VisibilityIcon color='primary' />
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton onClick={handleRemove}>
                    <DeleteIcon color='error' />
                </IconButton>
            </TableCell>
    </>
    )
}

export default BillItem