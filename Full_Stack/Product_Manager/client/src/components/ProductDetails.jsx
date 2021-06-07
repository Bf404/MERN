import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import {Button} from 'react-bootstrap'

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
    const deleteHandler = e =>{
        axios.delete('http://localhost:8000/api/products/' + id)
        .then(res => navigate('/'));
    }
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <Button variant="primary"  onClick={handelEdit}>Edit</Button> 
            <Button variant="danger" onClick={deleteHandler}> Delete </Button>
        </div>
    )

}

export default ProductDetails;