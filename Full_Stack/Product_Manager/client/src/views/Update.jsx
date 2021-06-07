import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router'
import ProductForm from '../components/ProductForm';

const Update = props => {
    const [title, setTitle] = useState("Loading... ");
    const [price, setPrice] = useState("Loading... ");
    const [desc, setDesc] = useState("Loading... ");
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then( res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDesc(res.data.desc);
            setLoaded(true)
        })
        .catch( err => console.log(err));
    },[props.id]);

    const updateProduct= product =>{
        axios.put('http://localhost:8000/api/products/' + props.id, product)
        .then( res => navigate('/'));
    }

    return(
        <div>
            {lodaed &&
            ( <ProductForm 
                onSubmit={updateProduct}
                title = {title}
                price = {price}
                desc = {desc}
                type="Update"
            />)}
            
        </div>
    )
}
export default Update;