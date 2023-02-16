import React from 'react'
import { useDispatch } from 'react-redux'
import ProductContainer from '../ProductComponents/ProductContainer'
import { asyncAddProduct } from '../../actions/productActions'
import ProductForm from '../ProductComponents/ProductForm'

const Products = (props) => {
    const dispatch = useDispatch()

    const formSubmit = (formData, resetForm) => {
        dispatch(asyncAddProduct(formData, resetForm))
    }
    return (
        <div className='grid-container'>
            <div className='center-form'>
                <ProductContainer />
            </div>
            <ProductForm formSubmit={formSubmit} />
        </div>
    )
}

export default Products