import React from "react";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import DataChart from "./Chart";
const Account = (props) => {
    const userDetails = useSelector((state) => {
        return state.userInfo
    })
    return (
        <div style={{marginTop: '1rem'}}>
            <Card>
                <CardContent style={{backgroundColor: '#7EC8E3'}}>
                    <Typography>
                        UserName: {userDetails.username}
                    </Typography>
                    <Typography>
                        Email: {userDetails.email}
                    </Typography>
                    <Typography>
                        Business Name: {userDetails.businessName}
                    </Typography>
                    <Typography>
                        Address: {userDetails.address}
                    </Typography>
                </CardContent>
            </Card><hr/>
            <DataChart/>
        </div>
    )
}

export default Account