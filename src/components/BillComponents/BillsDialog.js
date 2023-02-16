import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { useReactToPrint } from 'react-to-print'
import Paper from '@mui/material/Paper'


const BillDialog = (props) => {
    const {date,customer,total,lineItems,open,handleClose,getProduct,products} = props
    const componentRef = useRef()
    const formattedDate = (date) => {
        return new Date(date).toISOString().split('T')[0]
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    return (
        <Dialog onClose={handleClose} open={open}>
            <div ref={componentRef}>
            <DialogTitle onClose={handleClose}>
                <div style={{display : 'flex'}}>
                    <Typography style={{flexGrow : '1'}}>
                    Customer Name : {customer.name}
                    </Typography>
                    <Typography>
                        {formattedDate(date)}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent style={{width:'500px'}} dividers>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product </TableCell>
                                <TableCell align="right">Quantity </TableCell>
                                <TableCell align="right">SubTotal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                lineItems.map((lineItem) => {
                                    return (
                                        <TableRow key={lineItem._id}>
                                            <TableCell component="th" scope="row">{getProduct(products,lineItem.product)}</TableCell>
                                            <TableCell align="right">{lineItem.quantity}</TableCell>
                                            <TableCell align="right">{lineItem.subTotal}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography>
                Total : {total}
                </Typography>
            </DialogContent>
            </div>
            <DialogActions>
                <Button onClick={handlePrint} color="error"> Download </Button>
                <Button onClick={handleClose} color="error" variant='contained'> Close </Button>
                
            </DialogActions>
        </Dialog>
    )
}

export default BillDialog