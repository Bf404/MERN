import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';

const ProductForm = props => {
    const {onSubmit, type} = props;
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [desc, setDesc] = useState(props.desc);

    
    const formHandelr= (e) => {
        e.preventDefault();
        onSubmit({title, price, desc});
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <div style= {{display:'inline-block'}}>
            <Form onSubmit={formHandelr}>
            <Form.Group >
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" value = {title} onChange={ (e) => setTitle(e.target.value) } />
            </Form.Group>

            <Form.Group >
                <Form.Label>Price: </Form.Label>
                <Form.Control type="text" value = {price} onChange={ (e) => setPrice(e.target.value) } />
            </Form.Group>

            <Form.Group >
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" value = {desc} onChange={ (e) => setDesc(e.target.value) } />
            </Form.Group>
            
            <Button variant="primary" type="submit"> {type} </Button>
            </Form>
            </div>
            
        </div>
    )
}
export default ProductForm;