import React, {useState, useEffect} from 'react'
import axios from 'axios';

const ProductDetails = (props) =>{
    const {id} = props;
    const [product, setProduct] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {setProduct(res.data); console.log(res.data);})
        .catch( err => console.log(err))
    },[id]);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.desc}</p>
        </div>
    )

}

export default ProductDetails;