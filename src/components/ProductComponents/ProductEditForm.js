import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { asyncEditProduct } from '../../actions/productActions'

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    price: Yup.string().required('Price is required.')
})

const ProductEditForm = (props) => {
    const {id, name, price, handleEdit} = props
    const dispatch = useDispatch()
    const resetForm = () => {
        return {
            name: '',
            price: ''
        }
    }
    const formik = useFormik({
        initialValues: {
            name: name || '',
            price: price || ''
        },
        onSubmit: (values) => {
            dispatch(asyncEditProduct(id, values, resetForm, handleEdit))
        },
        validationSchema : validationSchema
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Typography>Edit Product</Typography>
                <TextField
                name='name'
                label='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant='outlined'
                margin='dense'
                />
                <TextField
                name='price'
                label='Price'
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
                variant='outlined'
                margin='dense'
                />
                <Button color='primary' variant='contained' type='submit'> Update Product </Button>
                
            </form>
        </div>
    )
}

export default ProductEditForm