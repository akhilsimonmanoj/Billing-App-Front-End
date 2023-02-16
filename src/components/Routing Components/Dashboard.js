import React from 'react'
import Login from './Login'
import Register from './Register'
import { Link, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../../actions/userActions'
import PrivateRoute from '../../helper/PrivateRoute'
import Customers from './Customers'
import Products from './Products'
import Bills from './Bills'
import Account from './Account'


const linkStyles = {
    textDecoration: 'none',
    color: 'white'
}

const Dashboard = (props) => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => {
        return state.userInfo.isLoggedIn
    })


    const handleClick = () => {
        localStorage.removeItem('token')
        props.history.push("/")
        dispatch(userLoggedOut())
    }

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    {
                        isLoggedIn ? (
                            <>
                                <Button color='inherit'>
                                    <Link style={linkStyles} to='/' exact='true'> Home </Link>
                                </Button>
                                <Button color='inherit'>
                                    <Link style={linkStyles} to='/app/customers'> Customers </Link>
                                </Button>
                                <Button color='inherit'>
                                    <Link style={linkStyles} to='/app/products'> Products </Link>
                                </Button>
                                <Button color='inherit'>
                                    <Link style={linkStyles} to='/app/bills'> Bills </Link>
                                </Button>
                                <Button color='inherit'>
                                    <Link style={linkStyles} to='/app/account'> Account </Link>
                                </Button>
                                <Button color='inherit'>
                                    <Link style={linkStyles} to='#' onClick={handleClick}> Logout </Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Typography variant='h6'>
                                    <Link style={linkStyles} to='/' exact='true'> Home </Link>
                                </Typography>
                                <Button variant='h6'>
                                    <Link style={linkStyles} to='/app/register'> Register </Link>
                                </Button>
                                <Button variant='h6'>
                                    <Link style={linkStyles} to='/app/login'> Login </Link>
                                </Button>
                            </>
                        )
                    }
                </Toolbar> 
            </AppBar>
            <Routes>
                <Route path='*' exact element={<Home/>}/>
                <Route path='/app/register' exact element={<Register/>} />
                <Route path='/app/login' exact element={<Login/>} />
                <Route path='/app/' element={<PrivateRoute />}> 
                    <Route path="customers" element={<Customers />} /> 
                    <Route path='products' element={<Products/>} /> 
                    <Route path='bills' element={<Bills/>} />
                    <Route path='/app/account' element={<Account/>} />
                </ Route> 
                
            </Routes>
            
            
        </div>
    )
}

export default Dashboard