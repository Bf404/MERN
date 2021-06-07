import React from 'react';
import {Link} from '@reach/router'
import {Button} from 'react-bootstrap'
import axios from 'axios';

const ProductList = ({products, removeFromDom}) => {

    const deleteHandler = (productId)  =>
    {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res =>removeFromDom(productId));

    }
    return (
        <div>
            <div style= {{width: 1000, height: 2, backgroundColor: 'gray', display: 'inline-block'} }></div>
            <h1> All Products:</h1>
            {
                products.map((product, idx) => {
                    return <p  key = {idx}><Link to={`/${product._id}`}>{product.title}</Link> 
                    | 
                    <Button variant="primary" > <Link style={{textDecoration: 'none', color: 'white'}} to={`products/${product._id}/edit`}>Edit </Link> </Button>
                    <Button variant="danger" onClick={e => deleteHandler(product._id)}> Delete </Button>
                    </p>
                    
                })
            }
        </div>
    )
}

export default ProductList;