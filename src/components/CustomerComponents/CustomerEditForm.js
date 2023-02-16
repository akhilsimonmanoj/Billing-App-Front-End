import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import '../../styles/Customer.css'
import { useDispatch } from 'react-redux'
import { asyncEditCustomers } from '../../actions/customerActions'

const validationSchema = Yup.object({
    name: Yup.string().required('Customer Name is required.'),
    email: Yup.string().email('Invalid Email Format.').required('Email address is required.'),
    mobile: Yup.string().required('Mobile Number is required.')
})

const CustomerEditForm = (props) => {
    const {id, name, email, mobile, handleEdit} = props
    const dispatch = useDispatch()
    const resetForm = () => {
        return {
            name: '',
            email: '',
            mobile: ''
        }
    }
    const formik = useFormik({
        initialValues: {
            name: name || '',
            email: email || '',
            mobile: mobile || ''
        },
        onSubmit: (values) => {
            console.log('id: ', id)
            dispatch(asyncEditCustomers(id, values, resetForm))
        },
        validationSchema : validationSchema
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant='h4'> Edit Customer </Typography>
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
                    name='email'
                    label='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type='email'
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant='outlined'
                    margin='dense'
                />
                <TextField
                    name='mobile'
                    label='Mobile'
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    variant='outlined'
                    margin='dense'
                />
                <Button variant='contained' color='primary' type='submit'> Update Customer </Button>
            </form>
        </div>
    )
}

export default CustomerEditForm