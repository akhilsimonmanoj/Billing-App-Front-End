import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { asyncRemoveCustomers } from '../../actions/customerActions'
import CustomerEditContainer from './CustomerEditContainer'
import CustomerDialog from './CustomerDialog'


const CustomerItem = (props) => {
    const { _id, name, email, mobile, formSubmit} = props
    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false)
    const [open, setOpen ] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleEdit = () => {
        setToggle(!toggle)
    }

    const handleRemove = () => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            dispatch(asyncRemoveCustomers(_id))
        }
    }
    return (
        <div>
            {
                toggle ? (
                    <div>
                    <CustomerEditContainer id={_id} name={name} email={email} mobile={mobile} formSubmit={formSubmit} handleEdit={handleEdit} />
                    <Button type='submit' variant='contained' onClick={handleEdit} color='error' > Close </Button>
                    </div>
                ) : (
                    <div>
                        {
                            open && <CustomerDialog name={name} email={email} mobile={mobile} open={open} handleClose={handleClose} />
                        }
                        <Card component='span'>
                            <CardContent>
                                {/* <Typography>
                                    ID : {_id}
                                </Typography> */}
                                <Typography>
                                    Name : {name} 
                                </Typography>
                                <Typography>
                                    Email : {email}
                                </Typography>
                                <Typography>
                                    Mobile : {mobile}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button variant='contained' size='small' color='primary' onClick={handleClickOpen}> View </Button>
                                <Button variant='contained' size='small' color='primary' onClick={handleEdit}> Edit </Button>
                                <Button variant='contained' size='small' color='error' onClick={handleRemove}> Remove </Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        </div>
    )
}

export default CustomerItem