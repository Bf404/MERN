import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router'


const AuthorForm = props =>{
    const {onSubmit} = props;
    const [name, setName] = useState(props.name)

    const formHandelr = e =>{
        e.preventDefault();
        onSubmit({name});
    }
    return(
        <div>
            <div style= {{display:'inline-block'}}>
            <Form onSubmit={formHandelr}>
            <Form.Group >
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" value = {name} onChange={ (e) => setName(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>| |<Button variant="primary" type="submit" onClick={e => {navigate('/')}}> Cancel </Button>

            </Form>
            </div>
        </div>
    )
}

export default AuthorForm;