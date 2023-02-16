import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { asyncAddProduct } from '../../actions/productActions'
import Button from '@mui/material/Button'
import TextField  from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import '../../styles/Products.css'

const validateSchema = Yup.object({
    name: Yup.string().required('Product Name is required.'),
    price: Yup.string().required("Product Price is required.")
})

const ProductForm = (props) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            price: ''
        },
        onSubmit: (values, {resetForm}) => {
            resetForm({values : ''})
            dispatch(asyncAddProduct(values, resetForm()))
            console.log('values', values)
        },
        validationSchema : validateSchema
    })
    return (
        <div>
            <form className='form-center' onSubmit={formik.handleSubmit}>
                <Typography variant='h4'> Add Product </Typography>
                <TextField
                label='Name'
                name='name'
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onChange={formik.handleChange}
                variant='outlined'
                margin='dense'
                />
                <TextField
                label='Price'
                name='price'
                value={formik.values.price}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
                onChange={formik.handleChange}
                variant='outlined'
                margin='dense'
                />
                <Button variant='contained' type='submit' color='primary'> Add Product </Button>
            </form>
        </div>
    )
}

export default ProductForm