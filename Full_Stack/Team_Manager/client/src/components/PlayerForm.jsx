import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';



const PlayerForm = props =>{
    const {onSubmit} = props;
    const [name, setName] = useState(props.name)
    const [prefPos, setPrefpos] = useState(props.prefPos)

    const formHandelr = e =>{
        e.preventDefault();
        onSubmit({name, prefPos});
    }
    return(
        <div>
            <div>
            <Form onSubmit={formHandelr}>
            <Form.Group >
                <Form.Label>Player Name: </Form.Label>
                <Form.Control type="text" value = {name} onChange={ (e) => setName(e.target.value) } />
            </Form.Group>
            <Form.Group >
                <Form.Label>Prefferd Postion: </Form.Label>
                <Form.Control type="text" value = {prefPos} onChange={ (e) => setPrefpos(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>

            </Form>
            </div>
        </div>
    )
}

export default PlayerForm;