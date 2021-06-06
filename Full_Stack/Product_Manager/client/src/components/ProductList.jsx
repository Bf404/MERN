import React from 'react';
import {Link} from '@reach/router'

const ProductList = ({products}) => {

    return (
        <div>
            <div style= {{width: 1000, height: 2, backgroundColor: 'gray', display: 'inline-block'} }></div>
            <h1> All Products:</h1>
            {
                products.map((product, idx) => {
                    return <p key = {idx}><Link to={`/${product._id}`}>{product.title}</Link></p>
                })
            }
        </div>
    )
}

export default ProductList;