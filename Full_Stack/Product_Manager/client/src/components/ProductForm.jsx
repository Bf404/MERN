import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';

const ProductForm = props => {
    const [title, setTitle] = useState("Loading... ");
    const [price, setPrice] = useState("Loading... ");
    const [desc, setDesc] = useState("Loading... ");

    
    const formHandelr= () => {
        axios.post("http://localhost:8000/api/products/new", {
            title,
            price,
            desc
        })
        .then( res => console.log(res))
        .catch( err => console.log(err));
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <div style= {{display:'inline-block'}}>
            <Form onSubmit={formHandelr}>
            <Form.Group >
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" onChange={ (e) => setTitle(e.target.value) } />
            </Form.Group>

            <Form.Group >
                <Form.Label>Price: </Form.Label>
                <Form.Control type="text" onChange={ (e) => setPrice(e.target.value) } />
            </Form.Group>

            <Form.Group >
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" onChange={ (e) => setDesc(e.target.value) } />
            </Form.Group>
            
            <Button variant="primary" type="submit"> Create </Button>
            </Form>
            </div>
            
        </div>
    )
}
export default ProductForm;