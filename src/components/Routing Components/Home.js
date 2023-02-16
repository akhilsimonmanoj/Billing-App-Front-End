import React from 'react'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './Register'
import { Button } from '@mui/material'
import Login from './Login'

const Home = (props) => {
    const isloggedIn = useSelector((state) => state.userInfo.isLoggedIn)
    return (
        <div style={{display: 'flex'}}>
            <div style={{marginTop: '10rem'}}>
                <Typography variant='h2' gutterBottom style={{fontFamily : 'Cursive'}}>
                    Welcome to Billing System
                </Typography><br/>
                {
                    !isloggedIn && (
                        <div>
                            <Typography variant='h4'> 
                                Click <Link to='/app/register' style={{textDecoration: 'none'}}> <Button variant='contained' color='primary'> Register </Button> </Link> to start.
                            </Typography>
                            <Typography variant='h5'>
                                If you have already registered, click <Link to='/app/login' style={{textDecoration: 'none'}}><Button variant='contained' color='primary'> Login </Button></Link>.
                            </Typography>
                        </div>
                    ) 
                }
            </div>
            <Routes>
                <Route path='/app/register' element={<Register/>} />
                <Route path='/app/login' element={<Login/>} />
            </Routes>
        </div>
    )
}

export default Home