import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import '../../styles/Products.css'

const ProductList = (props) => {
    const [products, searches] = useSelector((state) => {
        return [state.products, state.searches]
    })
    return (
        <div className='card-grid'>
            {
                products.filter((ele) => {
                    return ele.name.toLowerCase().includes(searches.toLowerCase())
                }).map((product) => {
                    return <ProductItem key={product._id} {...product} />
                })
            }
        </div>
        
    )
}

export default ProductList