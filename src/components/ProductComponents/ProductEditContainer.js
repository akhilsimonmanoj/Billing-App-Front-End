import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncEditProduct } from '../../actions/productActions'
import ProductEditForm from './ProductEditForm'

const ProductEditContainer = (props) => {
    const { id, name, price, handleEdit } = props
    const dispatch = useDispatch()

    const formSubmit = (formData, resetForm) => {
        dispatch(asyncEditProduct(id,formData, resetForm, handleEdit))
    }
    return (
        <div>
            <ProductEditForm id={id} name={name} price={price} formSubmit={formSubmit} handleEdit={handleEdit} />
        </div>
    )
}

export default ProductEditContainer