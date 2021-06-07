import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import {Button} from 'react-bootstrap'
import DeleteButton from './DeleteButton';

const ProductDetails = (props) =>{
    const {id} = props;
    const [product, setProduct] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {setProduct(res.data);})
        .catch( err => console.log(err))
    },[id]);

    const handelEdit = e => {
        navigate(`/products/${id}/edit`)
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <Button variant="primary"  onClick={handelEdit}>Edit</Button> 
            <DeleteButton productId = {id} successCallback = {() => navigate('/')} />
        </div>
    )

}

export default ProductDetails;