import React from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import BillItem from './BillItem'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const BillsTable = (props) => {
    const [bills, searches] = useSelector((state) => {
        return [state.bills, state.searches]
    })
    return (
        <div>
            <Typography variant='h4'> Bill Table </Typography> 
            <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Bill Amount</TableCell>
                            <TableCell>View</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            bills.filter((bill) => {
                                return bill.customer.name.toLowerCase().includes(searches.toLowerCase())
                            }).map((bill) => {
                                return (
                                    <TableRow key={bill._id}>
                                        <BillItem {...bill} />
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

export default BillsTable