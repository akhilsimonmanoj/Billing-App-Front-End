import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const useAuth = () => {
    const token = localStorage.getItem('token')
    if(token) {
        return true 
    } else {
        return false 
    }
}

const PrivateRoute = (props) => {
    const auth = useAuth()
    return (
        <>
            {auth ? <Outlet /> : <Navigate to="/app/login" />}
        </>
    )
}

export default PrivateRoute