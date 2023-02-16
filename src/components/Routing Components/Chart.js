import React from 'react'
import { Chart } from 'react-google-charts'
import { useSelector } from 'react-redux'





const DataChart = (props) => {

    const bills = useSelector((state) => {
        return state.bills
    })

    
    const dates = [...Array(7).keys()].map((index) => {
        const date = new Date()
        date.setDate(date.getDate() - index)

        return date
    })

    // console.log('Data: ',dates)

    const arr = [['Date', 'Total', {role : 'style'}]]
    dates.forEach((date1) => {
        let totalAmt = 0
        bills.forEach((bill) => {
            const dateNew = new Date(date1)
            // console.log('DateNew: ', dateNew)
            const dateNew2 = new Date(bill.date)
            // console.log('DateNew2: ', dateNew2)
            // console.log('Condition Check ',dateNew.getDay() === dateNew2.getDay())
            if(dateNew.getDay() === dateNew2.getDay()) {
                totalAmt += bill.total
            }
        })
        arr.push([date1.toDateString(), totalAmt, 'color : darkOrange'])
    })
    // console.log('Array: ', arr)
    
    return (
        <div>
            <Chart 
            chartType='ColumnChart'
            data={arr}
            width='100%'
            height='400px'
            />
        </div>
    )
}

export default DataChart