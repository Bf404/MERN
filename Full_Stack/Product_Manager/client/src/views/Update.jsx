import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router'

const Update = props => {
    const [title, setTitle] = useState("Loading... ");
    const [price, setPrice] = useState("Loading... ");
    const [desc, setDesc] = useState("Loading... ");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then( res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDesc(res.data.desc);
        })
        .catch( err => console.log(err));
    },[props.id]);

    const updateHandelr= e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + props.id, 
        {
            title,
            price,
            desc
        })
        .then( res => {console.log(res); navigate('/');});
    }

    return(
        <div>
            <h1> Update a Product</h1>
            <div style= {{display:'inline-block'}}>
            <Form onSubmit={updateHandelr}>
            <Form.Group >
                <Form.Label >Title: </Form.Label>
                <Form.Control type="text" onChange={ (e) => setTitle(e.target.value) } value ={title} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Price: </Form.Label>
                <Form.Control type="text" onChange={ (e) => setPrice(e.target.value) } value ={price} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" onChange={ (e) => setDesc(e.target.value) } value ={desc} />
            </Form.Group>
            
            <Button variant="primary" type="submit"> Update </Button>
            </Form>
            </div>
            
        </div>
    )
}
export default Update;