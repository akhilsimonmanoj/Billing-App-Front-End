import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ProductDialog = (props) => {
    const { open, name, price, handleClose } = props
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Product Details
                </DialogTitle>
                <DialogContent style={{width: '400px', height: '80px'}}>
                    <hr/>
                    <Typography variant='subtitle1'>
                        Name: {name}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Price: {price}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='error' variant='contained'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ProductDialog