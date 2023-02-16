import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { useDispatch } from 'react-redux'
import { resetSearch } from '../../actions/searchActions'
import Search from '../Routing Components/Search'

const ProductContainer = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
         dispatch(resetSearch())
        } 
     },[])
    
    
    return (
        <div className='grid-container'>
            <Search />
            <div className='product-grid'>
                <ProductList />
            </div>
        </div>
    )
}

export default ProductContainer