import React from 'react'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'

const CartItems = (props) => {
    const {cartItems, handleIncrement, handleDecrement} = props

    const increment = (e,id) => {
        e.preventDefault()
        handleIncrement(id)
    }

    const decrement = (e, id) => {
        e.preventDefault() 
        handleDecrement(id)
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table style={{width: '450px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell> Product </TableCell>
                            <TableCell></TableCell>
                            <TableCell> Quantity </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartItems.map((cartItem) =>{
                                return (
                                    <TableRow key={cartItem.id}>
                                        <TableCell> {cartItem.name} </TableCell>
                                        <TableCell>
                                            <IconButton disabled={cartItem.quantity <=1} onClick={(e) => {decrement(e,cartItem.id)}}>
                                                <RemoveCircleRoundedIcon color={cartItem.quantity > 1 ? 'error' : 'disabled'} style={{marginTop: '10px'}} />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            {cartItem.quantity}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton onClick={(e) =>{increment(e,cartItem.id)}}>
                                                <AddCircleIcon color='primary' style={{marginTop: '10px'}}/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CartItems