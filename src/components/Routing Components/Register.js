import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import '../../styles/Register.css'
import { Button } from '@mui/material'
import axios from '../../Config/axiosConfig'
import { useNavigate } from 'react-router-dom'

const validateForm = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(6,'Password must be minimum 6 characters').max(15, 'Password must be maximum 15 characters').required('Password is required'),
    businessName: Yup.string().required('Business Name is required.'),
    address: Yup.string().required('Address is required.')

})

const Register = (props) => {
    const navigate = useNavigate()
    const formik = useFormik ({
        initialValues : {
            username: '',
            email: '',
            password: '',
            businessName: '',
            address: ''
        },
        onSubmit: (values, {resetForm}) => {
            resetForm({values : ''})
            axios.post('users/register', values)
            .then((response) => {
                const result = response.data
                console.log(result)
                if(result.hasOwnProperty('errors')){
                    console.log(result.message)
                } else if (result.hasOwnProperty('errmsg')){
                    alert(`Email - ${values.email} is already registered.`)
                } else {
                    alert('Successfully Registered')
                    navigate('/app/login')
                    resetForm()
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
        },
        validationSchema: validateForm
    })
    return (
        <div>
            <div>
                <form className='form-center' onSubmit={formik.handleSubmit}>
                    <Typography variant='h2'> Register </Typography>
                    <TextField  label='Username' 
                                name='username'
                                value={formik.values.username} 
                                onChange={formik.handleChange}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                                margin='dense'
                                variant='outlined'
                    />
                    <TextField  label='Email' 
                                name='email'
                                value={formik.values.email} 
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                margin='dense'
                                variant='outlined'
                    />
                    <TextField  label='Password' 
                                name='password'
                                value={formik.values.password} 
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                margin='dense'
                                variant='outlined'
                    />
                    <TextField  label='Business Name' 
                                name='businessName'
                                value={formik.values.businessName} 
                                onChange={formik.handleChange}
                                error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                                helperText={formik.touched.businessName && formik.errors.businessName}
                                margin='dense'
                                variant='outlined'
                    />
                    <TextField  label='Address' 
                                name='address'
                                value={formik.values.address} 
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                                margin='dense'
                                variant='outlined'
                    />
                    <Button variant='contained' color='primary' type='submit'> Register </Button>
                </form>
                
            </div>
        </div>
    )
}

export default Register