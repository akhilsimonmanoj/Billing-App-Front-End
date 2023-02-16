import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../../styles/Login.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { asyncUserLogin } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const validateForm = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required')
})

const Login = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const formik = useFormik({
        initialValues : {
            email: '',
            password: ''
        },
        onSubmit: (values, {resetForm}) => {
            resetForm({values : ''})
            dispatch(asyncUserLogin(values, navigate, resetForm()))
            
        },
        validationSchema: validateForm
    })
    return (
        <div>
            <form className="form-center" onSubmit={formik.handleSubmit}>
                <Typography variant='h2'> Login </Typography>
                <TextField
                    label='Email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant='outlined'
                    margin='dense'
                />
                <TextField
                    label='Password'
                    name='password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    variant='outlined'
                    margin='dense'
                />
                <Button variant="contained" type="submit"> Login </Button>
            </form>
            
        </div>
    )
}

export default Login