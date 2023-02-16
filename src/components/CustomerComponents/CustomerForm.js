import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { asyncCreateCustomer } from '../../actions/customerActions'
import '../../styles/Customer.css'
import { Button, TextField, Typography } from '@mui/material'

const validateSchema = Yup.object({
    name: Yup.string().required('Customer Name is required'),
    email: Yup.string().email('Invalid Email').required('Customer Email is required'),
    mobile: Yup.string().required('Customer Mobile is required')
})

const CustomerForm = (props) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues : {
            name: '',
            email: '',
            mobile: ''
        },
        onSubmit : (values, {resetForm}) => {
            resetForm({values: ''})
            dispatch(asyncCreateCustomer(values, resetForm()))
        },
        validationSchema : validateSchema
    })
    return (
        <div>
            <form className='form-center' onSubmit={formik.handleSubmit}>
                <Typography variant='h4'> Add Customer </Typography>
                <TextField 
                label='Name'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant='outlined'
                margin='dense'
                />
                <TextField 
                label='Email'
                name='email'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant='outlined'
                margin='dense'
                />
                <TextField 
                label='Mobile'
                name='mobile'
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                variant='outlined'
                margin='dense'
                />
                <Button variant='contained' type='submit' > Add Customer </Button>
            </form>
        </div>
    )
}

export default CustomerForm