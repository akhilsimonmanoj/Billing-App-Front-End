import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { asyncRemoveProduct } from '../../actions/productActions'
import ProductEditContainer from './ProductEditContainer'
import ProductDialog from './ProductDialog'

const ProductItem = (props) => {
    const dispatch = useDispatch()
    const { _id, name, price } = props

    const [open, setOpen] = useState(false)
    const [toggle, setToggle] = useState(false)

    //For Product Dialog 
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
            dispatch(asyncRemoveProduct(_id))
        }
        
    }
    return (
        <div>
            {
                toggle ? ( 
                    <div>
                        <ProductEditContainer id={_id} name={name} price={price} handleEdit={handleEdit} />
                        <Button color='error' variant='contained' onClick={handleEdit} type='submit' > Close </Button>
                    </div>
                ) : (
                    <div>
                        {
                            open && <ProductDialog open={open} handleClose={handleClose} name={name} price={price} />
                        }
                        <Card component='span'>
                            <CardContent>
                                {/* <Typography>
                                    ID: {_id}
                                </Typography> */}
                                <Typography>
                                    Name: {name}
                                </Typography>
                                <Typography>
                                    Price: {price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' size='small' color='primary' onClick={handleClickOpen} > View </Button>
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

export default ProductItem