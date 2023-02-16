import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

const CustomerDialog = (props) => {
    const {name, email, mobile, open, handleClose} = props
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle> Customer Details </DialogTitle>
            <DialogContent style={{width: '400px', height: '100px'}}>
                <hr/>
                <Typography variant='subtitle1'>
                    Name: {name}
                </Typography>
                <Typography variant='subtitle1'>
                    Email: {email}
                </Typography>
                <Typography variant='subtitle1'>
                    Mobile: {mobile}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='error' variant='contained'> Close </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomerDialog