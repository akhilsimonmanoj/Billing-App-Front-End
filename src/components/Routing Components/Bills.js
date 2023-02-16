import React from 'react'
import BillsContainer from '../BillComponents/BillsContainer'
import BillsForm from '../BillComponents/BillsForm'
import '../../styles/Bills.css'

const Bills = (props) => {
    
    return (
        <div className='grid-container'>
            <div className='item1'>
                <BillsContainer/>
            </div>
            <div className='flex-item'>
                <BillsForm />
            </div> 
        </div>
    )
}

export default Bills